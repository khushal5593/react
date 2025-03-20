import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-6">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
        </div>
        <nav class="flex space-x-4">
          <a href="#" class="hover:text-gray-400">Home</a>
          <a href="#" class="hover:text-gray-400">About</a>
          <a href="#" class="hover:text-gray-400">Services</a>
          <a href="#" class="hover:text-gray-400">Contact</a>
        </nav>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="text-center text-sm text-gray-400 mt-4">
        &copy; 2025 Your Brand. All rights reserved.
      </div>
    </div>
  </footer>
  
  )
}

export default Footer