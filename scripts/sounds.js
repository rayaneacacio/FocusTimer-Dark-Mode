export default function sounds(){
  const forestSound = new Audio('./audios/Floresta.wav')
  const rainSound = new Audio('./audios/Chuva.wav')
  const coffeeShopSound = new Audio('./audios/Cafeteria.wav')
  const fireplaceSound = new Audio('./audios/Lareira.wav')

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  fireplaceSound.loop = true

  return{
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound
  }
}