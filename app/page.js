"use client";
import {useEffect,useState} from "react";
const services=["Auto Glass","Auto Mechanics","Auto Body","Construction","Something Else"];
export default function Home(){
 const [sent,setSent]=useState(false);
 const [theme,setTheme]=useState("clear");
 useEffect(()=>{const saved=localStorage.getItem("wbia-theme");if(saved)setTheme(saved)},[]);
 const toggleTheme=()=>setTheme(t=>{const next=t==="clear"?"dark":"clear";localStorage.setItem("wbia-theme",next);return next});
 return <main className={theme==="dark"?"theme-dark":"theme-clear"}>
 <nav><b>WE DO IT ALL</b><div className="nav-actions"><span>Greater Boston</span><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={"Switch to "+(theme==="clear"?"dark":"clear")+" mode"}>{theme==="clear"?"☾ Dark":"☀ Clear"}</button></div></nav>
 <section className="hero"><p className="eyebrow">ONE CALL. WE HANDLE IT.</p><h1>What do you need <em>done?</em></h1><p className="lead">From your car to your home, tell us the problem. We find the right professional, get you a quote, and coordinate the job.</p></section>
 <section className="card">{sent?<div><h2>Request received.</h2><p>Our team will review the job and contact you with next steps.</p><button onClick={()=>setSent(false)}>Submit another</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Tell us about the job</h2><label>What kind of help do you need?</label><div className="services">{services.map(s=><label className="chip" key={s}><input required name="service" type="radio"/>{s}</label>)}</div><label>What needs to be done?</label><textarea required placeholder="Describe the problem, job, vehicle, property, or project..."/><div className="grid"><input required placeholder="Your name"/><input required type="tel" placeholder="Phone number"/></div><div className="grid"><input type="email" placeholder="Email"/><input required placeholder="ZIP code"/></div><button type="submit">Get My Quote →</button><small>No obligation. WBIA coordinates your request with local service professionals.</small></form>}</section>
 <section className="how"><h2>One relationship. Every job.</h2><p>You call WBIA first. We scope the request, find a provider, coordinate the quote and keep the job moving.</p><div className="steps"><b>01<br/>Tell us what you need</b><b>02<br/>We find the right pro</b><b>03<br/>You approve the quote</b><b>04<br/>We get it handled</b></div></section></main>
}