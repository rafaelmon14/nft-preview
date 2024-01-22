import iconClock from './assets/images/icon-clock.svg'
import iconEthereum from './assets/images/icon-ethereum.svg'
import iconView from './assets/images/icon-view.svg'
import avatar from './assets/images/image-avatar.png'
import equilibrium from './assets/images/image-equilibrium.jpg'


function App() {

  return (
    <>
      <main className="w-[327px] h-[542px] rounded-2xl bg-Very-dark-blue-card font-Outfit">
        <div className="p-6">
          <div className="relative">
            <div className="absolute flex items-center justify-center rounded-lg opacity-0 bg-Cyan w-full h-full hover:opacity-50">
              <img src={iconView} alt="Icon view" />
            </div>
            <img className="rounded-lg" src={equilibrium} alt="Equilibrium image" />
          </div>
          <h2 className="font-bold text-White text-[22px] pt-5 hover:text-Cyan cursor-pointer">Equilibrium #3429</h2>
          <p className="text-Soft-blue text-base mb-5 pt-3 font-light">Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex mb-3 justify-between border-b-[1px] border-Very-dark-blue-line pb-3">
            <div className="flex items-center space-x-2">
              <svg className="w-[11px] h-[18px]"><image className="w-[11px] h-[18px]" xlinkHref={iconEthereum} alt="Ethereum icon" /></svg>
              <p className="text-Cyan uppercase font-semibold text-sm">0.041 eth</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-[17px] h-[17px]"><image className="w-[17px] h-[17px]" xlinkHref={iconClock} alt="Ethereum icon" /></svg>
              <p className="text-Soft-blue font-light">3 days left</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img className="w-8 rounded-full border border-White" src={avatar} alt="Avatar image" />
            <p className="text-Soft-blue font-light">Creation of <span className="text-White font-light hover:text-Cyan cursor-pointer">Jules Wyvern</span></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
