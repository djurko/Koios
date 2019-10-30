using KoiosDAL.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KoiosDAL.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected KoiosContext _context;
        protected DbSet<T> _dbSet;

        //public GenericRepository() : this(new KoiosContext())
        //{

        //}

        public GenericRepository(KoiosContext _context)
        {
            this._context = _context;
            this._dbSet = _context.Set<T>();
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _dbSet.AsEnumerable();
        }

        public virtual T GetById(int id)
        {
            return _dbSet.Find(id);
        }

        public virtual void Create(T entity)
        {
            if (_context.Entry(entity).State != EntityState.Detached)
            {
                _context.Entry(entity).State = EntityState.Added;
            }
            else
            {
                _dbSet.Add(entity);
            }
        }

        public virtual void Update(T entity)
        {
            if (_context.Entry(entity).State == EntityState.Detached)
            {
                _dbSet.Attach(entity);
            }
            _context.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Delete(T entity)
        {
            if (_context.Entry(entity).State != EntityState.Deleted)
            {
                _context.Entry(entity).State = EntityState.Deleted;
            }
            else
            {
                _dbSet.Attach(entity);
                _dbSet.Remove(entity);
            }
        }

        #region Dispose
        private bool _disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
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
