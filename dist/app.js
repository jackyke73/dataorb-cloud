import config from './config.js';
// Registered first: if any later line throws, the fieldset stays disabled so the
// actionless <form> can never fall back to a native GET that puts entries in the URL.
window.addEventListener('error', () => {
  const fs = document.getElementById('quote-fields');
  if (fs) fs.disabled = true;
  const st = document.getElementById('form-status');
  if (st) st.textContent = 'This form is unavailable in this browser. Nothing has been sent.';
});
const $ = selector => document.querySelector(selector);
const form = $('#quote-form');
const status = $('#form-status');
const button = $('#submit-button');
const fields = [...form.querySelectorAll('input, select, textarea')];
// Conditional fields live inside a [hidden] wrapper. Excluding them keeps stale
// answers out of the request and stops them blocking validation.
const activeFields = () => fields.filter(field => field.required || !field.closest('[hidden]'));
const endpointReady = Boolean(config.quoteEndpoint && config.privacyUrl);
let draft = '';
let statusKind = '';
let sending = false;
$('#year').textContent = new Date().getFullYear();
const date = new Date();
$('#start').min = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const menuButton = $('.menu-toggle');
const menu = $('#primary-nav');
function closeMenu(){ menuButton.setAttribute('aria-expanded','false'); menu.classList.remove('is-open'); menuButton.lastElementChild.textContent='+'; }
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);menuButton.lastElementChild.textContent=open?'−':'+';});
menu.addEventListener('click',e=>{if(e.target.closest('a')) closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && menu.classList.contains('is-open')){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 1001px)').addEventListener('change',closeMenu);
function clearError(field){
  const out=document.getElementById(`${field.id}-error`);
  if(out) out.textContent='';
  field.removeAttribute('aria-invalid'); field.removeAttribute('aria-describedby');
}
const project = $('#project');
const conditionalFields = [...document.querySelectorAll('[data-when-project]')];
let lastProject = project.value;
function syncProjectFields(){
  const show = project.selectedOptions[0]?.hasAttribute('data-extended') ?? false;
  // Clear on any change of project type, not only on hide: switching between two
  // revealing types keeps the fields on screen, and their answers belong to the
  // type they were given under.
  const changed = project.value !== lastProject;
  conditionalFields.forEach(wrap => {
    wrap.hidden = !show;
    if(!show || changed) wrap.querySelectorAll('input, select, textarea')
      .forEach(field => { field.value=''; clearError(field); });
  });
  lastProject = project.value;
}
syncProjectFields();
project.addEventListener('change', syncProjectFields);
window.addEventListener('pageshow', syncProjectFields);
document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', () => {
  if(sending) return;
  const opt=[...project.options].find(o => o.value===link.dataset.project);
  if(!opt) return;                       // drifted label: leave the select untouched
  project.value=opt.value; syncProjectFields(); invalidateDraft();
}));
document.querySelectorAll('[data-gpu]').forEach(link=>link.addEventListener('click',()=>{if(sending)return;$('#gpu').value=link.dataset.gpu;validate($('#gpu'));invalidateDraft();}));
const contact = $('#contact-details');
if(config.email || config.phone || config.address){
  contact.replaceChildren();
  if(config.email){const a=document.createElement('a');a.href=`mailto:${config.email}`;a.textContent=config.email;contact.append(a);}
  if(config.phone){const a=document.createElement('a');a.href=`tel:${config.phone.replace(/[^+\d]/g,'')}`;a.textContent=config.phone;contact.append(a);}
  if(config.address){const p=document.createElement('span');p.textContent=config.address;contact.append(p);}
}
if(endpointReady){
  $('#connection-notice').textContent='Share your requirements for review. Availability, pricing and delivery timing are confirmed during quoting.';
  button.replaceChildren(document.createTextNode('Send quote request'));
  const privacy = $('#privacy-note');privacy.replaceChildren(document.createTextNode('By sending, you ask us to contact you about this request. Please review our '));
  const a=document.createElement('a');a.href=config.privacyUrl;a.textContent='privacy notice';a.style.textDecoration='underline';privacy.append(a,document.createTextNode('. Please do not include passwords or confidential datasets.'));
}
function validate(field){
  let error='';const value=field.value.trim();
  if(field.required && !value) error='Please complete this field.';
  else if(field.type==='email' && value && (field.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) error='Enter a valid email address.';
  else if(field.id==='quantity' && (field.validity.badInput || (value && (!Number.isInteger(Number(value)) || Number(value)<1 || Number(value)>100000)))) error='Enter a whole number from 1 to 100,000.';
  else if(field.id==='start' && (field.validity.badInput || (value && value<field.min))) error='Choose today or a future date.';
  else if(field.maxLength>0 && value.length>field.maxLength) error=`Use ${field.maxLength} characters or fewer.`;
  const output=document.getElementById(`${field.id}-error`);output.textContent=error;
  const hint=document.getElementById(`${field.id}-hint`);
  const described=[hint&&hint.id, error&&output.id].filter(Boolean);
  if(error){field.setAttribute('aria-invalid','true');}else{field.removeAttribute('aria-invalid');}
  if(described.length){field.setAttribute('aria-describedby',described.join(' '));}else{field.removeAttribute('aria-describedby');}
  return !error;
}
function setStatus(text, kind){ status.textContent=text; statusKind=kind; }
function invalidateDraft(){draft='';$('#request-preview').hidden=true;if(statusKind!=='delivery')setStatus('','');}
fields.forEach(field=>{field.addEventListener('blur',()=>validate(field));field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validate(field);invalidateDraft();});field.addEventListener('change',invalidateDraft);});
form.addEventListener('submit',async event=>{
  event.preventDefault();
  const live=activeFields();
  const results=live.map(validate);
  if(results.includes(false)){setStatus('Please check the highlighted fields. Nothing has been sent.','draft');const first=live[results.indexOf(false)];first.focus({preventScroll:true});first.scrollIntoView({block:'center',behavior:'instant'});return;}
  const data=Object.fromEntries(live.map(f=>[f.name,f.value.trim()]));
  if(!endpointReady){
    const labels={name:'Full name',email:'Work email',company:'Company / institution',project:'Project type',gpu:'GPU preference',quantity:'Estimated number of GPUs',region:'Preferred region',start:'Preferred start date',term:'Rental term',use:'Primary use',hosting:'Hosting arrangement',networking:'Networking & storage requirements',notes:'Additional details'};
    draft=`${config.brandName} — Quote request draft\nNOT SUBMITTED\n\n`+Object.entries(data).map(([key,value])=>`${labels[key] ?? key}: ${value || 'To be discussed'}`).join('\n');
    $('#request-text').textContent=draft;$('#request-preview').hidden=false;
    setStatus('Your draft is ready below. Online submission is not connected; nothing has been sent.','draft');status.focus();return;
  }
  sending=true;$('#quote-fields').disabled=true;form.setAttribute('aria-busy','true');button.textContent='Sending…';setStatus('Sending your request…','delivery');
  try{
    const response=await fetch(config.quoteEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(15000),credentials:'omit'});
    const result=await response.json();
    if(!response.ok || result.accepted!==true)throw new Error('Receipt not confirmed');
    setStatus('Your request has been received for review. This does not reserve GPUs or confirm availability.','delivery');
  }catch{setStatus('We could not confirm receipt. Your entries are still here. Please try again later or contact us directly.','delivery');}
  finally{sending=false;$('#quote-fields').disabled=false;form.removeAttribute('aria-busy');button.textContent='Send quote request';status.focus();}
});
$('#download-request').addEventListener('click',()=>{
  if(!draft)return;
  const url=URL.createObjectURL(new Blob([draft],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='dataorb-cloud-quote-draft.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  setStatus(`Draft download requested. Nothing has been sent to ${config.brandName}.`,'draft');
});

// Everything above is wired; only now is the form safe to interact with.
$('#quote-fields').disabled = false;
