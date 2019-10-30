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
        private readonly IService<Country> _countryService;

        public CountriesController()
        {
            _countryService = new CountryService();
        }

        // GET: api/Countries
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            return _countryService.GetAll();
        }

        //// GET: api/Countries/5
        //[HttpGet("{id}", Name = "Get")]
        //public Country Get(int id)
        //{
        //    return _CountryService.GetById(id);
        //}

        //// POST: api/Countries
        //[HttpPost]
        //public void Post([FromBody] Country Country)
        //{
        //    _CountryService.Create(Country);
        //}

        //// PUT: api/Countries/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] Country Country)
        //{
        //    _CountryService.Update(id, Country);
        //}

        //// DELETE: api/Countries/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //    _CountryService.Delete(id);
        //}
    }
}