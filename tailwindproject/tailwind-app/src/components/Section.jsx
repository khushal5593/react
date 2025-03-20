import React from 'react'
import image from '../assets/car.jpg'
const Section = () => {
  return (
    <>
      <section class="bg-gray-100 py-10 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-gray-900">About</h2>
    <p class="text-gray-600 mt-4">A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor . Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.</p>
  </div>
</section>

<section class="bg-gray-100 py-12">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
    <div>
      <h2 class="text-3xl font-bold">About Our Services</h2>
      <p class="mt-4 text-gray-600">We provide the best solutions tailored to your needs.</p>
    </div>
    <div>
      <img src={image} alt="Placeholder image" class="rounded-lg shadow-lg"/>
    </div>
  </div>
</section>

<section class="bg-white py-16">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8">Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="p-6 bg-gray-100 rounded-lg">
        <h3 class="font-bold text-lg mb-2">Electronic Parking Brake</h3>
        <p class="text-gray-600">Description of the first feature.</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-lg">
        <h3 class="font-bold text-lg mb-2">360 View Camera</h3>
        <p class="text-gray-600">A 4-camera setup to give you a complete view around the car, as if you were looking at it from the top of your car</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-lg">
        <h3 class="font-bold text-lg mb-2">Automatic Parking Assist</h3>
        <p class="text-gray-600">Detects empty spots if you’re moving slowly or stopped & helps you park without controlling steering. You still have to control accelerator & brakes.</p>
      </div>
    </div>
  </div>
</section>

    </>

  )
}

export default Section