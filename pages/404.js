import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>Redirecting to <Link href="/"><a>Homepage</a></Link> for more marmite goodness...</p>

      <style jsx>{`
        .not-found {
          background: #F4E640;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
          color: #ff0000;
        }
        a{
            color: #ff6a00;
            text-decoration: none;
        }
      `}</style>
    </div>
  );
}
 
export default NotFound;