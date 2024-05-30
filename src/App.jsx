
import React from 'react';
import './App.css'


const data = [
  {
      title: "FREE",
      price: "$0/month",
      features:[
          {title: "Single User", isEnabled: true},
          {title: "50GB Storage", isEnabled: true},
          {title: "Unlimited Public Projects", isEnabled: true},
          {title: "Community Access", isEnabled: true},
          {title: "Unlimited Private Projects", isEnabled: false},
          {title: "Dedticated Phone Support", isEnabled: false},
          {title: "Free Subdomain", isEnabled: false},
          {title: "Monthly Reports", isEnabled: false}
         
      ]
  },

  {
      title: "PLUS",
      price: "$9/month",
      features:[
        {title: "Single User", isEnabled: true},
        {title: "50GB Storage", isEnabled: true},
        {title: "Unlimited Public Projects", isEnabled: true},
        {title: "Community Access", isEnabled: true},
        {title: "Unlimited Private Projects", isEnabled: true},
        {title: "Dedticated Phone Support", isEnabled: true},
        {title: "Free Subdomain", isEnabled: true},
        {title: "Monthly Reports", isEnabled: false}
      ]
  },

  {
      title: "PRO",
      price: "$49/month",
      features:[
        {title: "Single User", isEnabled: true},
        {title: "50GB Storage", isEnabled: true},
        {title: "Unlimited Public Projects", isEnabled: true},
        {title: "Community Access", isEnabled: true},
        {title: "Unlimited Private Projects", isEnabled: true},
        {title: "Dedticated Phone Support", isEnabled: true},
        {title: "Free Subdomain", isEnabled: true},
        {title: "Monthly Reports", isEnabled: true}
      ]
  },
];


function App() {
  
  return (
    
    <div className="body-container">
        {data.map((val) => (
          <div className='card-body' 
              key={val.title}
              style={{border: "2px solid", margin: "16px", padding: "16px", backgroundColor:'white', }}>
                <h3 className='title'>{val.title}</h3>
                <h1 className=''>{val.price}</h1>
                <hr/>
            <div className='feature'>
                {val.features.map((feat)=>(
                <h3 className="feature-text" key={feat.title}>
                  {feat.isEnabled && <i className="fa-solid fa-check"></i>}
                  {!feat.isEnabled && <i className="fa-solid fa-xmark"></i>}
                  {" "}
                  {feat.title}</h3>
              ))}
              <div className="button">
                <button className='order'>Button</button>
              </div>
           </div>
          </div>
        ))}
    </div>
  )
}

export default App
