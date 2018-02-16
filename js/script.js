var starters = $(".starters")
var chosed = localStorage;

	$(".starters").on("click", function() // Checking the type of the clicked Pokémon
	{
		if($(this).hasClass("fire"))
		{
			checkFire();
		}

		else if($(this).hasClass("grass"))
		{
			checkGrass();
		}

		else if($(this).hasClass("water"))
		{
			checkWater();
		}
	});

function checkFire() 
{
	if (window.location.href.indexOf("gen1")>-1) // If the type is Fire and from Gen 1, then the starter is Charmander
	{
		localStorage.setItem("gifPokemon", 'media/gifs/charmander_gif.gif'); // Passing the "src" for the Charmander gif
	}

	else if (window.location.href.indexOf("gen2")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/cyndaquil_gif.gif');

	else if (window.location.href.indexOf("gen3")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/torchic_gif.gif');
	}

	else if (window.location.href.indexOf("gen4")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/chimchar_gif.gif');
	}

	else if (window.location.href.indexOf("gen5")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/tepig_gif.gif');
	}

	else if (window.location.href.indexOf("gen6")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/fennekin_gif.gif');
	}
}

function checkWater()
{
	if (window.location.href.indexOf("gen1")>-1) // If the type is Water and from Gen 1, then the starter is Squirtle
	{
		localStorage.setItem("gifPokemon", 'media/gifs/squirtle_gif.gif'); // Passing the "src" for the Squirtle gif
	}
			
	else if (window.location.href.indexOf("gen2")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/totodile_gif.gif');
	}

	else if (window.location.href.indexOf("gen3")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/mudkip_gif.gif');
	}

	else if (window.location.href.indexOf("gen4")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/piplup_gif.gif');
	}

	else if (window.location.href.indexOf("gen5")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/oshawott_gif.gif');
	}

	else if (window.location.href.indexOf("gen6")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/froakie_gif.gif');
	}
}

function checkGrass()
{
	if (window.location.href.indexOf("gen1")>-1) // If the type is Grass and from Gen 1, then the starter is Bulbasaur
	{
		localStorage.setItem("gifPokemon", 'media/gifs/bulbasaur_gif.gif'); // Passing the "src" for the Bulbasaur gif
	}
			
	else if (window.location.href.indexOf("gen2")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/chikorita_gif.gif');
	}

	else if (window.location.href.indexOf("gen3")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/treecko_gif.gif');
	}

	else if (window.location.href.indexOf("gen4")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/turtwig_gif.gif');
	}

	else if (window.location.href.indexOf("gen5")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/snivy_gif.gif');
	}

	else if (window.location.href.indexOf("gen6")>-1)
	{
		localStorage.setItem("gifPokemon", 'media/gifs/chespin_gif.gif');
	}
}

function loadGif()
{
	$("#pokeGif").attr("src", localStorage.getItem("gifPokemon")); // The function that loads the gif in end.html
}
