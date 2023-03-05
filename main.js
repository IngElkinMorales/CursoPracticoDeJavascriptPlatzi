const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const productList = [] 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopMenuuClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

productList.push({
    name: 'Camiseta Death Note',
    price: 16000,
    image: 'https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/332470236_1593124754519956_6388929877750395468_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeELUVD1ouo7xslv1GkC7idHyVkWXvxvkMrJWRZe_G-QyhcKJOOOATzBxO6_i3v-76va6Ql1LICRzbIz036lOt_f&_nc_ohc=Wcnl24SvzD0AX_OQGdY&_nc_ht=scontent.fbog9-1.fna&oh=00_AfC78M1fJFuh2MD6e_FvUv2zZDPkjHSrzmzjp73aTrVG-w&oe=6401EC27',
});
productList.push({
    name:'Camiseta monita 🙈',
    price:16000,
    image:'https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/332493012_596809478556046_8423199260507269434_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGVHGvPxFm3WeXWQUIIkmTqnEfS3tPyyOScR9Le0_LI5PVk9KphpK9CWxSCFY2B6peXfQ8no-TpY3hC3fLDG9Yw&_nc_ohc=kE8QQl9sQtEAX_karhV&_nc_ht=scontent.fbog9-1.fna&oh=00_AfBHvxnfq4eBqtk9xA2FEZGImoCmtIOCLNev9kmTbq8ulg&oe=6401AD7A',
})
productList.push({
    name:'Pocillo: Feliz Cumpleaños',
    price:13000,
    image:'https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/328818698_1180009059310832_8310559068395137431_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGwXvvUkTSXIIJVPvuudo66b1P5J3uFiKBvU_kne4WIoBIKs5DACds8IBmv5nxNr51lOVHnYzKllSzNIqEDfL3p&_nc_ohc=jIMpfQSDvWQAX8y0a2H&_nc_ht=scontent.fbog9-1.fna&oh=00_AfDGQhauJBMzz0dvBTmLlxgTtRhWMkZ4uVuL2VzWwvZuUg&oe=64017A4F',
})
productList.push({
    name:'Pocillo: Feliz Cumpleaños',
    price:13000,
    image:'https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/325413751_1326579294843035_4114001244420873884_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEqJd51kknCjVMpzGVZktKp_6pdBnwSzA__ql0GfBLMD5vaUwzm34zIYrkO2xjv0x1znQrcFeJP25H6TQ3TrqR-&_nc_ohc=jsYPb56DjewAX9gqE3m&tn=hx0xS92M8qDpZ5Gz&_nc_ht=scontent.fbog9-1.fna&oh=00_AfDzkT9JR5s3zxH0b7iY6J3bj1hsYixYjM3Xdr9cU030sw&oe=64027DE1',
})
productList.push({
    name:'Pocillo: Feliz Día',
    price:13000,
    image:'https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/322470525_6198114366874786_6186336252277116951_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGUltR6Bre6l10nSZ1RzJPAnS9fRhOyHi-dL19GE7IeL5vIH4gso1ihT9hLnEAEDMza6qNJ6mrgscPgEchZQjwJ&_nc_ohc=6GpiGy9YjA4AX_cXlqs&_nc_ht=scontent.fbog9-1.fna&oh=00_AfCnqwgteSHXrVjp0uOo3BIRzWQ-GAxZGkpXDtidSINULg&oe=64025C15',
})

/* 
    <div class="product-card">
                <img src="" alt="" class="product-img">
        <div class="product-info">
            <div>
                <p>$16.000</p>
                <p>Camiseta Death Note</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>

Este ciclo for crea esta estructura HTML y la inserta dinámicamente dependiendo de la cantidad de productos que tenga el array productList
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);