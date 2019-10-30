using KoiosDAL.Infrastructure;
using KoiosDAL.Models;
using System.Linq;

namespace KoiosDAL.Repositories
{
    public class SettlementRepository : GenericRepository<Settlement>
    {
        //public SettlementRepository() : base()
        //{

        //}

        public SettlementRepository(KoiosContext context) : base(context)
        {
            this._context = context;
        }

        public int GetAllCount()
        {
            return GetAll().Count();
        }

        //public override Settlement GetById(int id)
        //{
        //    return _context.Settlements.Find(id);
        //}
    }
}