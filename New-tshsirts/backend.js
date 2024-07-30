function addToFavorites() {
    const card = `

                <main class="containershirt">
                <section class="cardshirt">
                    <div class="Contenedor-tshirt">
                        <img src="Photos-fav/file (13).png" class="shirt-social">
                    </div>
                    <div class="product-infoshirt">
                        <h2>Anti Social Social Club Kkoch Tonal Tee</h2>
                        <p>Negro y Azul</p>
                        <div class="priceshirt">
                            $2,800
                        </div>
                        <div class="btnshirt">
                            <button class="buy-btn">Comprar</button>
                            <button class="favoritos" onclick="addToFavorites()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                                  </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

                        <main class="containershirt1">
                <section class="cardshirt1">
                    <div class="Contenedor-tshirt1">
                        <img src="Photos-fav/file (12).png" class="shirt-social">
                    </div>
                    <div class="product-infoshirt1">
                        <h2>Anti Social Social Club x Fragment Precious</h2>
                        <p>Negro y Azul</p>
                        <div class="priceshirt1">
                            $2,800
                        </div>
                        <div class="btnshirt1">
                            <button class="buy-btn">Comprar</button>
                            <button class="favoritos" onclick="addToFavorites()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                                  </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

                    <main class="containershirt2">
            <section class="cardshirt2">
                <div class="Contenedor-tshirt2">
                    <img src="Photos-fav/file (11).png" class="shirt-social">
                </div>
                <div class="product-infoshirt2">
                    <h2>Anti Social Social Club x Fragment Precious</h2>
                    <p>Negro y Azul</p>
                    <div class="priceshirt2">
                        $2,800
                    </div>
                    <div class="btnshirt2">
                        <button class="buy-btn">Comprar</button>
                        <button class="favoritos" onclick="addToFavorites()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                              </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <main class="containershirt3">
            <section class="cardshirt3">
                <div class="Contenedor-tshirt3">
                    <img src="Photos-fav/file (14).png" class="shirt-social">
                </div>
                <div class="product-infoshirt3">
                    <h2>Anti Social Social Club Kkotch Tee</h2>
                    <p>Brown</p>
                    <div class="priceshirt3">
                        $2,800
                    </div>
                    <div class="btnshirt3">
                        <button class="buy-btn">Comprar</button>
                        <button class="favoritos" onclick="addToFavorites()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                              </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>
                
                `;
    
    localStorage.setItem('favoriteCard', card);
    window.location.href = '/Favoritos/Favoritosp.html'; // Redirigir al otro HTML
}