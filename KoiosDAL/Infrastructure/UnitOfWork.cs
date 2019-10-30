using System;

namespace KoiosDAL.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly KoiosContext _context;

        //public UnitOfWork() : this(new KoiosContext())
        //{

        //}

        public UnitOfWork(KoiosContext context)
        {
            this._context = context;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        #region Dispose
        private bool _disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}