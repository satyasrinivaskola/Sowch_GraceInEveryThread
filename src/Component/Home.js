import './Home.css'

import Sowch from './top_container'
import Collection from './collection'
import About from './About'
import Contact from './contact'
const Home=()=><div>

<Sowch />
        
        <Collection />
        <div className="bottom-container"> 
     <About />
     <Contact />
     </div>
</div>
export default Home