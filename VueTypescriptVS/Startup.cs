using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VueTypescriptVS.Startup))]
namespace VueTypescriptVS
{
	public partial class Startup
	{
		public void Configuration(IAppBuilder app)
		{
		}
	}
}
