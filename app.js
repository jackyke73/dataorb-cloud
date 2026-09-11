import config from './config.js';
const $ = selector => document.querySelector(selector);
const form = $('#quote-form');
const status = $('#form-status');
const button = $('#submit-button');
const fields = [...form.querySelectorAll('input, select, textarea')];
const endpointReady = Boolean(config.quoteEndpoint && config.privacyUrl);
let draft = '';
$('#quote-fields').disabled = false;
$('#year').textContent = new Date().getFullYear();
const date = new Date();
$('#start').min = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const menuButton = $('.menu-toggle');
const menu = $('#primary-nav');
function closeMenu(){ menuButton.setAttribute('aria-expanded','false'); menu.classList.remove('is-open'); menuButton.lastElementChild.textContent='+'; }
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);menuButton.lastElementChild.textContent=open?'−':'+';});
menu.addEventListener('click',e=>{if(e.target.closest('a')) closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && menu.classList.contains('is-open')){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 801px)').addEventListener('change',closeMenu);
document.querySelectorAll('[data-gpu]').forEach(link=>link.addEventListener('click',()=>{$('#gpu').value=link.dataset.gpu;validate($('#gpu'));invalidateDraft();}));
const contact = $('#contact-details');
if(config.email || config.phone || config.address){
  contact.replaceChildren();
  if(config.email){const a=document.createElement('a');a.href=`mailto:${config.email}`;a.textContent=config.email;contact.append(a);}
  if(config.phone){const a=document.createElement('a');a.href=`tel:${config.phone.replace(/[^+\d]/g,'')}`;a.textContent=config.phone;contact.append(a);}
  if(config.address){const p=document.createElement('span');p.textContent=config.address;contact.append(p);}
}
if(endpointReady){
  $('#connection-notice').textContent='Share your requirements for review. Availability, pricing and delivery timing are confirmed during quoting.';
  button.replaceChildren(document.createTextNode('Send quote request ↗'));
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
  if(error){field.setAttribute('aria-invalid','true');field.setAttribute('aria-describedby',output.id);}else{field.removeAttribute('aria-invalid');field.removeAttribute('aria-describedby');}
  return !error;
}
function invalidateDraft(){draft='';$('#request-preview').hidden=true;status.textContent='';}
fields.forEach(field=>{field.addEventListener('blur',()=>validate(field));field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validate(field);invalidateDraft();});field.addEventListener('change',invalidateDraft);});
form.addEventListener('submit',async event=>{
  event.preventDefault();
  const results=fields.map(validate);
  if(results.includes(false)){status.textContent='Please check the highlighted fields. Nothing has been sent.';const first=fields[results.indexOf(false)];first.focus({preventScroll:true});first.scrollIntoView({block:'center',behavior:'instant'});return;}
  const data=Object.fromEntries(fields.map(f=>[f.name,f.value.trim()]));
  if(!endpointReady){
    const labels={name:'Full name',email:'Work email',company:'Company / institution',gpu:'GPU preference',quantity:'Number of GPUs',region:'Preferred region',start:'Preferred start date',term:'Rental term',use:'Primary use',notes:'Additional details'};
    draft=`${config.brandName} — Quote request draft\nNOT SUBMITTED\n\n`+Object.entries(data).map(([key,value])=>`${labels[key]}: ${value || 'To be discussed'}`).join('\n');
    $('#request-text').textContent=draft;$('#request-preview').hidden=false;
    status.textContent='Your draft is ready below. Online submission is not connected; nothing has been sent.';status.focus();return;
  }
  $('#quote-fields').disabled=true;form.setAttribute('aria-busy','true');button.textContent='Sending…';status.textContent='Sending your request…';
  try{
    const response=await fetch(config.quoteEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(15000),credentials:'omit'});
    const result=await response.json();
    if(!response.ok || result.accepted!==true)throw new Error('Receipt not confirmed');
    status.textContent='Your request has been received for review. This does not reserve GPUs or confirm availability.';
  }catch{status.textContent='We could not confirm receipt. Your entries are still here. Please try again later or contact us directly.';}
  finally{$('#quote-fields').disabled=false;form.removeAttribute('aria-busy');button.textContent='Send quote request ↗';status.focus();}
});
$('#download-request').addEventListener('click',()=>{
  if(!draft)return;
  const url=URL.createObjectURL(new Blob([draft],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='dataorb-cloud-quote-draft.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  status.textContent=`Draft download requested. Nothing has been sent to ${config.brandName}.`;
});
