//import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';
const content = document.getElementById('content');

const fetchData = async urlApi => {
    const response = await fetch(urlApi, {method: 'GET'});
    const data = await response.json();

    return data;
}

const getImages = async urlApi => {
    try {
        const products = await fetchData(`${urlApi}/products?offset=0&limit=8`);

        let view = `
            ${products.map(product => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${product.images[0]}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${product.title}
                        </h3>
                    </div>
                </div>
            `).join('')}
        `;

        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
}

getImages(API);
