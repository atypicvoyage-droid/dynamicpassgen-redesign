import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section style={{paddingTop: 36, background: 'none'}}>
          <div style={{textAlign:'center', marginBottom:18}}>
            <h1 style={{fontWeight:900,fontSize:'2.7rem',letterSpacing:'-0.04em',color:'#fff',margin:'0 0 10px'}}>
              <span style={{color:'#fff'}}>STRONG PASSWORDS, </span>
              <span style={{background:'linear-gradient(90deg,#6366f1,#0ea5e9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>SECURE LIFE</span>
            </h1>
            <div style={{color:'#a2afd6',fontSize:'1.21rem',fontWeight:500}}>Instantly generate secure, unbreakable passwords for every account. Client-side security, no saves, no signup.</div>
          </div>
          <PasswordGeneratorPanel />
        </section>
      </main>
      <Footer />
    </>
  )
}
