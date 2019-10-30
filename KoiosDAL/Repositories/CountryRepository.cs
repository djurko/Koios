using KoiosDAL.Infrastructure;
using KoiosDAL.Models;

namespace KoiosDAL.Repositories
{
    public class CountryRepository : GenericRepository<Country>
    {
        //public CountryRepository() : base()
        //{

        //}

        public CountryRepository(KoiosContext context) : base(context)
        {
            this._context = context;
        }
    }
}