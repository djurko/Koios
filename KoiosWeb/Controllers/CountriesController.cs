using KoiosDAL.Models;
using KoiosLogic;
using KoiosLogic.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace KoiosWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly CountryService _countryService;

        public CountriesController(CountryService service)
        {
            //_countryService = service;
            _countryService = new CountryService();
        }

        // GET: api/Countries
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            return _countryService.GetAll();
        }

        // GET: api/Countries/5
        [HttpGet("{id}", Name = "GetCountry")]
        public Country Get(int id)
        {
            return _countryService.GetById(id);
        }

        // POST: api/Countries
        [HttpPost]
        public void Post([FromBody] Country Country)
        {
            _countryService.Create(Country);
        }

        // PUT: api/Countries/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Country Country)
        {
            _countryService.Update(id, Country);
        }

        // DELETE: api/Countries/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _countryService.Delete(id);
        }
    }
}