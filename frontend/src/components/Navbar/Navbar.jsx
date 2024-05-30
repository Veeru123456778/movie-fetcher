function Navbar(){
return(
    <nav className="bg-white shadow-lg">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
   
    <div className="flex items-center">
      <img src="logo.jpg" alt="Movie Explorer" className="h-8 mr-2" /> 
      <h1 className="text-lg font-semibold text-gray-800">Movie Explorer</h1>
    </div>
    <ul className="flex">
      <li className="mr-6">
        <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline">Home</a>
      </li>
      <li className="mr-6">
        <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline">Movies</a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline">About</a>
      </li>
    </ul>
  </div>
</nav>

)
}

export default Navbar