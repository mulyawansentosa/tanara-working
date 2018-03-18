function layout(name) {
  return function(resolve) {
    require(['./layouts/' + name + '.vue'], resolve);
  }
}

let routes = [
  {
  	path: '/',
    component: resolve => require(['./components/views/Home.vue'], resolve),
    children: [
      {
        path: '/',
      	component: resolve => require(['./components/views/Home.vue'], resolve),
        meta: {
          title: "Tanara"
        }
      }
    ]
  },
  {
    path: '/sign-in',
    component: resolve => require(['./components/views/SignIn.vue'], resolve),
    meta: {
      title: "Sign in"
    }
  },
  {
    path: '/sign-up',
    component: resolve => require(['./components/views/SignUp.vue'], resolve),
    meta: {
      title: "Sign up"
    }
  },
  {
    path: '/user',
    redirect: '/user/profile',
    component: layout('Default'),
    children: [
      {
        path: '/user/profile',
        components: {
          main: resolve => require(['./components/views/UserProfile.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Profile"
        }
      },
      {
        path: '/user/notifications',
        components: {
          main: resolve => require(['./components/views/UserNotifications.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Notifications"
        }
      },
      {
        path: '/user/messages',
        components: {
          main: resolve => require(['./components/views/UserMessages.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Messages"
        }
      },
      {
        path: '/user/change-password',
        components: {
          main: resolve => require(['./components/views/UserChangePassword.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Change Password"
        }
      },
      {
        path: '/user/settings',
        components: {
          main: resolve => require(['./components/views/UserSettings.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "User Settings"
        }
      }
    ]
  },
  {
  	path: '/dashboard',
    redirect: '/dashboard/home',
  	component: layout('Default'),
    children: [
		{
			path: '/dashboard/home',
			components: {
				main: resolve => require(['./components/views/DashboardHome.vue'], resolve),
				navbar: resolve => require(['./components/Navbar.vue'], resolve),
				sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
			},
			meta: {
				title: "Dashboard Home"
			}
		},
		{
			path: '/dashboard/entity',
			components: {
			  main: resolve => require(['./components/views/DashboardEntity.vue'], resolve),
			  navbar: resolve => require(['./components/Navbar.vue'], resolve),
			  sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
			},
			meta: {
			  title: "Dashboard Entity"
			}
		},
		{
			path: '/dashboard/rasio-guru-murid-smp-mts',
			components: {
			  main: resolve => require(['./components/views/bantenprov/rasio-guru-murid-smp-mts/DashboardRasioGMSmpMts.vue'], resolve),
			  navbar: resolve => require(['./components/Navbar.vue'], resolve),
			  sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
			},
			meta: {
			  title: "Rasio Guru-Murid (RGM) SD/MI"
			}
		}
  ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard/home',
	component: resolve => require(['./AdminLayout.vue'], resolve),	
    component: layout('Default'),
    children: [
		{
			path: '/admin/dashboard/rasio-guru-murid-smp-mts',
			components: {
				main: resolve => require(['./components/bantenprov/rasio-guru-murid-smp-mts/RasioGMSmpMtsAdmin.show.vue'], resolve),
				navbar: resolve => require(['./components/Navbar.vue'], resolve),
				sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
			},
			meta: {
				title: "Rasio Guru-Murid (RGM) SD/MI"
			}
		}	
		,
      {
        path: '/admin/dashboard/home',
        components: {
          main: resolve => require(['./components/views/AdminDashboardHome.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Dashboard Home"
        }
      },
      {
        path: '/admin/contents',
        components: {
          main: resolve => require(['./components/views/AdminContents.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Contents"
        }
      },
      {
        path: '/admin/configurations',
        components: {
          main: resolve => require(['./components/views/AdminConfigurations.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Configurations"
        }
      },
      {
        path: '/admin/reports',
        components: {
          main: resolve => require(['./components/views/AdminReports.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Reports"
        }
      },
      {
        path: '/admin/reports/system-reports',
        components: {
          main: resolve => require(['./components/views/AdminSystemReports.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "System Reports"
        }
      },
      {
        path: '/admin/reports/system-logs',
        components: {
          main: resolve => require(['./components/views/AdminSystemLogs.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "System Logs"
        }
      }
    ]
  },
  {
    path: '/demo',
    redirect: '/demo/vue-form',
    component: layout('Default'),
    children: [
      {
        path: '/demo/vue-form',
        components: {
          main: resolve => require(['./components/views/DemoVueForm.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue form"
        }
      },
      {
        path: '/demo/vue-select',
        components: {
          main: resolve => require(['./components/views/DemoVueSelect.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue select"
        }
      },
      {
        path: '/demo/vue-datepicker',
        components: {
          main: resolve => require(['./components/views/DemoVueDatepicker.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue date picker"
        }
      },
      {
        path: '/demo/vue-chartjs',
        components: {
          main: resolve => require(['./components/views/DemoVueChartjs.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue Chart.js"
        }
      },
      {
        path: '/demo/vue-echarts',
        components: {
          main: resolve => require(['./components/views/DemoVueEcharts.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue ECharts"
        }
      },
      {
        path: '/demo/vue-tables',
        components: {
          main: resolve => require(['./components/views/DemoVueTables.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue tables"
        }
      },
      {
        path: '/demo/vue-table',
        components: {
          main: resolve => require(['./components/views/DemoVueTable.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Vue table"
        }
      },
      {
        path: '/demo/mini-toastr',
        components: {
          main: resolve => require(['./components/views/DemoMiniToastr.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Mini toastr"
        }
      }
    ]
  },
  {
  	path: '/provinsi',
    redirect: '/provinsi/home',
  	component: layout('Default'),
    children: [
      {
        path: '/provinsi/home',
        components: {
          main: resolve => require(['./components/views/provinsi/provinsi.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Provinsi"
        }
      },
      {
        path: '/provinsi/form',
        components: {
          main: resolve => require(['./components/views/provinsi/form.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Provinsi"
        }
      },
      {
        path: '/provinsi/update/:id',
        components: {
          main: resolve => require(['./components/views/provinsi/form.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Provinsi"
        }
      },
      {
        path: '/kabupaten/home',
        components: {
          main: resolve => require(['./components/views/kabupaten/kabupaten.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Kabupaten"
        }
      },
      {
        path: '/kecamatan/home',
        components: {
          main: resolve => require(['./components/views/kecamatan/kecamatan.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Kecamatan"
        }
      },
      {
        path: '/desa/home',
        components: {
          main: resolve => require(['./components/views/desa/desa.vue'], resolve),
          navbar: resolve => require(['./components/Navbar.vue'], resolve),
          sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
        },
        meta: {
          title: "Data Desa"
        }
      },
    ]
  },

  //ROUTE PROVINSI WILAYAH INDONESIA
	{
		path: '/wilayah-indonesia/provinsi',
		redirect: '/wilayah-indonesia/provinsi',
		component: layout('Default'),
		children: [
			{
				path: '/wilayah-indonesia/provinsi/form',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsiForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
			{
				path: '/wilayah-indonesia/provinsi/form/:id',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsiForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
			{
				path: '/wilayah-indonesia',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsi.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
			{
				path: '/wilayah-indonesia/:provinsi',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsi.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
			{
				path: '/wilayah-indonesia/:provinsi/:kabupaten',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsi.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
			{
				path: '/wilayah-indonesia/:provinsi/:kabupaten/:kecamatan',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/provinsi/WilayahIndonesiaProvinsi.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Provinsi"
				}
			},
		]
	},
	//END ROUTE PROVINSI WILAYAH INDONESIA
	
	//ROUTE KABUPATEN WILAYAH INDONESIA
	{
		path: '/wilayah-indonesia/kabupaten',
		redirect: '/wilayah-indonesia/kabupaten',
		component: layout('Default'),
		children: [
			{
				path: '/wilayah-indonesia/kabupaten',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kabupaten/WilayahIndonesiaKabupaten.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kabupaten"
				}
			},
			{
				path: '/wilayah-indonesia/kabupaten/form',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kabupaten/WilayahIndonesiaKabupatenForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kabupaten"
				}
			},
			{
				path: '/wilayah-indonesia/kabupaten/form/:id',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kabupaten/WilayahIndonesiaKabupatenForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kabupaten"
				}
			},
		]
	},
	//END ROUTE KABUPATEN WILAYAH INDONESIA

	//ROUTE KECAMATAN WILAYAH INDONESIA
	{
		path: '/wilayah-indonesia/kecamatan',
		redirect: '/wilayah-indonesia/kecamatan',
		component: layout('Default'),
		children: [
			{
				path: '/wilayah-indonesia/kecamatan',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kecamatan/WilayahIndonesiaKecamatan.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kecamatan"
				}
			},
			{
				path: '/wilayah-indonesia/kecamatan/form',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kecamatan/WilayahIndonesiaKecamatanForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kecamatan"
				}
			},
			{
				path: '/wilayah-indonesia/kecamatan/form/:id',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/kecamatan/WilayahIndonesiaKecamatanForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Kecamatan"
				}
			},
		]
	},
	//END ROUTE KECAMATAN WILAYAH INDONESIA

	//ROUTE DESA WILAYAH INDONESIA
	{
		path: '/wilayah-indonesia/desa',
		redirect: '/wilayah-indonesia/desa',
		component: layout('Default'),
		children: [
			{
				path: '/wilayah-indonesia/desa',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/desa/WilayahIndonesiaDesa.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Desa"
				}
			},
			{
				path: '/wilayah-indonesia/desa/form',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/desa/WilayahIndonesiaDesaForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Desa"
				}
			},
			{
				path: '/wilayah-indonesia/desa/form/:id',
				components: {
					main: resolve => require(['./components/views/bantenprov/wilayah-indonesia/desa/WilayahIndonesiaDesaForm.vue'], resolve),
					navbar: resolve => require(['./components/Navbar.vue'], resolve),
					sidebar: resolve => require(['./components/Sidebar.vue'], resolve)
				},
				meta: {
					title: "Data Desa"
				}
			},
		]
	},
	//END ROUTE DESA WILAYAH INDONESIA
	
];

export default routes
