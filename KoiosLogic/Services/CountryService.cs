using KoiosDAL.Infrastructure;
using KoiosDAL.Models;
using KoiosDAL.Repositories;
using KoiosLogic.Services;
using System.Collections.Generic;

namespace KoiosLogic
{
    public class CountryService : IService<Country>
    {
        private readonly KoiosContext _context;
        private readonly IUnitOfWork _unitOfWork;
        private readonly CountryRepository _countryRepository;

        public CountryService()
        {
            _context = new KoiosContext();
            _unitOfWork = new UnitOfWork(_context);
            _countryRepository = new CountryRepository(_context);
        }

        public IEnumerable<Country> GetAll()
        {
            return _countryRepository.GetAll();
        }

        public Country GetById(int id)
        {
            return _countryRepository.GetById(id);
        }

        public void Create(Country country)
        {
            _countryRepository.Create(country);
            _unitOfWork.Save();
        }

        public void Update(int id, Country country)
        {
            country.CountryId = id;
            _countryRepository.Update(country);
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            var country = _countryRepository.GetById(id);
            _countryRepository.Delete(country);
            _unitOfWork.Save();
        }
    }
}
