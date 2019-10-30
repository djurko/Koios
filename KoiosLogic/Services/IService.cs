using System.Collections.Generic;

namespace KoiosLogic.Services
{
    public interface IService<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Create(T entity);
        void Update(int id, T entity);
        void Delete(int id);
    }
}
