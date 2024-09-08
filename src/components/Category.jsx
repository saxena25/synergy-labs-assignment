function Category() {
    const data = [
        {
            title: "The Foodies",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg9pGM31smNK9kRq2t27mu_-S_eOb-n4ckw&s"
        },
        {
            title: "The Techies",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg9pGM31smNK9kRq2t27mu_-S_eOb-n4ckw&s"
        },
        {
            title: "The Fashionistas",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg9pGM31smNK9kRq2t27mu_-S_eOb-n4ckw&s"
        },
        {
            title: "The Podcasters",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg9pGM31smNK9kRq2t27mu_-S_eOb-n4ckw&s"
        },
        {
            title: "The Travellers",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg9pGM31smNK9kRq2t27mu_-S_eOb-n4ckw&s"
        }
    ]
    return ( 
        <div className='category-wrapper'>
            <div className='category'>
                <div className='category-top'>
                    <h1 className='category-header'>Categories</h1>
                    <button className="category-view-all">View All</button>
                </div>
                <div className="category-cards-wrapper">
                    {data.map((card, index)=>(
                        <div key={index} className="category-cards">
                            <p className="category-title">{card.title}</p>
                            <img className="category-photo" src={card.src} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Category;