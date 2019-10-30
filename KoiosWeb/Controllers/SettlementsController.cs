using KoiosDAL.Models;
using KoiosLogic.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using X.PagedList;

namespace KoiosWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettlementsController : ControllerBase
    {
        private readonly SettlementService _settlementService;

        public SettlementsController()
        {
            _settlementService = new SettlementService();
        }

        // GET: api/Settlements
        [HttpGet]
        public IEnumerable<Settlement> Get(int? page)
        {
            var settlements = _settlementService.GetAll();
            return settlements;

            //var pageNumber = page ?? 1;
            //var onePageOfSettlements = settlements.ToPagedList(pageNumber, 1);

            //return onePageOfSettlements;
        }

        // GET: api/Settlements/5
        [HttpGet("{id}", Name = "Get")]
        public Settlement Get(int id)
        {
            return _settlementService.GetById(id);
        }

        // POST: api/Settlements
        [HttpPost]
        public void Post([FromBody] Settlement settlement)
        {
            _settlementService.Create(settlement);
        }

        // PUT: api/Settlements/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Settlement settlement)
        {
            _settlementService.Update(id, settlement);
        }

        // DELETE: api/Settlements/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _settlementService.Delete(id);
        }

        // GET: api/Settlements/Count
        [HttpGet]
        [Route("Count")]
        public int GetCount()
        {
            return _settlementService.GetAllCount();
        }
    }
}