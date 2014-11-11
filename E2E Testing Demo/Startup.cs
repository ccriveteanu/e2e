using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(E2E_Testing_Demo.Startup))]
namespace E2E_Testing_Demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
