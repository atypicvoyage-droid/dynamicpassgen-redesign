import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GuidePage({ params }) {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <article style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Guide Article</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>By DynamicPassGen Security Team</p>
          <div style={{lineHeight: '1.8'}}>
            <p>This is a placeholder for the detailed guide article about {params.slug}.</p>
            <p>Add your comprehensive security guide content here with proper formatting, examples, and best practices.</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
