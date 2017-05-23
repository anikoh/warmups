class PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def create

    poke = Pokemon.new
    poke.nickname = params[:nickname]
    poke.species = params[:species]
    poke.level = params[:level]
    if poke.save
      redirect_to '/pokemon'
    end
  end

  def new
  end

end
