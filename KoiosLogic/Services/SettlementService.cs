using System.Collections.Generic;
using KoiosDAL.Infrastructure;
using KoiosDAL.Models;
using KoiosDAL.Repositories;

namespace KoiosLogic.Services
{
    public class SettlementService : IService<Settlement>
    {
        private readonly KoiosContext _context;
        private readonly IUnitOfWork _unitOfWork;
        private readonly SettlementRepository _settlementRepository;
        private readonly CountryRepository _countryRepository;

        public SettlementService()
        {
            _context = new KoiosContext();
            _unitOfWork = new UnitOfWork(_context);
            _settlementRepository = new SettlementRepository(_context);
            _countryRepository = new CountryRepository(_context);
        }

        public IEnumerable<Settlement> GetAll()
        {
            var allSettlements = _settlementRepository.GetAll();
            foreach (var el in allSettlements)
            {
                el.Country = _countryRepository.GetById(el.CountryId);
            }

            return allSettlements;
        }

        public Settlement GetById(int id)
        {
            var settlement = _settlementRepository.GetById(id);
            settlement.Country = _countryRepository.GetById(settlement.CountryId);
            return settlement;
        }

        public void Create(Settlement settlement)
        {
            _settlementRepository.Create(settlement);
            _unitOfWork.Save();
        }

        public void Update(int id, Settlement settlement)
        {
            settlement.SettlementId = id;
            settlement.Country = _countryRepository.GetById(settlement.CountryId);
            _settlementRepository.Update(settlement);
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            var settlement = _settlementRepository.GetById(id);
            _settlementRepository.Delete(settlement);
            _unitOfWork.Save();
        }

        public int GetAllCount()
        {
            return _settlementRepository.GetAllCount();
        }
    }
}
