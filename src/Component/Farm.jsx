import React from 'react'


const Farm = () => {
   const farm =[
        {
          "id": 1,
          "title": "HIDDEN FALLS ESTATE",
          "description": "Hidden Falls Estate gets its name from a beautiful yet elusive waterfall that is hidden among an outcrop of huge rocks  yet elusive waterfall.",
          "image": "https://bluetokaicoffee.com/cdn/shop/files/Rectangle_59_800x.png?v=1704352745"
        },
        {
            "id": 2,
            "title":"attikan estates",
            "description": "Located to the south of Mysore, Karnataka, the Biligiri Ranjan Hills, or “white hills”, are named hangs over region Located to the south .",
            "image": "https://bluetokaicoffee.com/cdn/shop/files/Rectangle_61_1afeabb3-5659-4b9f-bfa3-58fc6b12bb44_800x.png?v=1705923114"   
          },
        {
          "id": 3,
          "title":"ram estate",
          "description": "Currently managed by the 5th generation of the family, Ram Estate has. The estate is strategically located in the crest of Pulney Hills in Kamanur village.",
          "image": "https://bluetokaicoffee.com/cdn/shop/files/IMG_8680_3_800x.png?v=1705923241"   
        },
        {
          "id": 4,
          "title":"ratnagiri estate",
          "description": "Ratnagiri Estate is a Rainforest Alliance certified farm in the South Indian Western Ghats near Bababudangiri, the place where coffee in India first originated.",
          "image": "https://bluetokaicoffee.com/cdn/shop/files/IMG_8681_2_800x.png?v=1705923365"   
        },
        {
          "id": 5,
          "title":"Yelliemadaloo Estate",
          "description": "Yelliemadaloo Estate, lies along the banks of the stream it’s named after. Located on alongside pepper and areca nuts.",
          "image": "https://bluetokaicoffee.com/cdn/shop/files/Rectangle_83_800x.png?v=1705923404"   
        },
        {
          "id": 6,
          "title":"Araku valley",
          "description": "The Araku Valley Farmers Collective is run and implemented by the non-profit TechnoServe.",
          "image": "https://bluetokaicoffee.com/cdn/shop/files/Rectangle_60_79376239-e60b-40ab-a8d8-d2ee7fef1c9e_800x.png?v=1705923768"   
        }
      ]

  return (
    <div className='farm'>
        <img src="https://bluetokaicoffee.com/cdn/shop/files/allfarm-banner_1370x.png?v=1704352977" alt="" srcset=""/>

        <div className="farms-container">
      {farm.map((farm) => (
        <div key={farm.id} className="farm-card">
          <img src={farm.image} alt={farm.title} className="farm-image" />
          <h2 className="farm-title">{farm.title}</h2>
          <p className="farm-description">{farm.description}</p>
        </div>
      ))}
    </div>

    

    </div>
  )
}

export default Farm