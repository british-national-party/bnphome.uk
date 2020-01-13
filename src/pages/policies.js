import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const PolicyAnimalWelfarePage = () => (

<Layout>

    <div>

      <h1>Policies</h1>

      <ul>
      <li><Link to="policies/policy-animal-welfare">Animal Welfare</Link></li>
      <li><Link to="policies/policy-british-culture">British Culture</Link></li>
      <li><Link to="policies/defence">Defence</Link></li>
      <li><Link to="policies/democracy">Democracy</Link></li>
      <li><Link to="policies/economy">Economy</Link></li>
      <li><Link to="policies/education">Education</Link></li>
      <li><Link to="policies/energy">Energy</Link></li>
      <li><Link to="policies/health">Health</Link></li>
      <li><Link to="policies/housing">Housing</Link></li>
      <li><Link to="policies/immigration">Immigration</Link></li>
      <li><Link to="policies/lawandorder">Law and Order</Link></li>
      <li><Link to="policies/reversing-islamisation">Reversing Islamisation</Link></li>
      <li><Link to="policies/senior-citizens">Senior Citizens</Link></li>
      </ul>

    </div>

  </Layout>

)
  
  export default PolicyAnimalWelfarePage