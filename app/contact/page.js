import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page");`}
      </Script>
     this is contact
    </div>
  )
}

export default contact
export const metadata = {
  title: " Contact Facebook- connect with the world",
  description: "Contact facebook",
};
