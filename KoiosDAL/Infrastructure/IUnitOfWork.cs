using System;

namespace KoiosDAL.Infrastructure
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();
    }
}
