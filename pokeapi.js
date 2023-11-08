$(document).ready(function() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'GET',
        success: function(data) {
            let pokemonList = data.results;

            let pokemonListHtml = '';
            $.each(pokemonList, function(index, pokemon) {
                pokemonListHtml += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">${pokemon.name}</h5>
                                <a href="${pokemon.url}" class="btn btn-primary" target="_blank">Lihat Detail</a>
                            </div>
                        </div>
                    </div>
                `;
            });

            $('#pokemon-list').html(pokemonListHtml);
        },
        error: function() {
            alert('Gagal mengambil data Pokemon.');
        }
    });
});
