import { Component } from '@angular/core';
import { url } from 'inspector';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

// import { MegaMenuService } from './megahorizontalmenu.service';

@Component({
  selector: 'app-megahorizontalmenu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './megahorizontalmenu.component.html',
  styleUrls: [`./megahorizontalmenu.component.scss`,
    `./../../../../node_modules/primeflex/primeflex.css`]
})
export class MegaHorizontalmenuComponent {

  megaMenuItems: MegaMenuItem[] = [];

  megaMenuData: any = [{
    "menu_id": 5,
    "parent_menu": 1,
    "label_parent": "DASHBOARD",
    "icon": "pi pi-chart-bar",
    "label": "Summary",
    "label_vn": "Summary",
    "routerLink": "/dashboard",
    "share_link": "#",
    "orders_p": 0,
    "orders": 1,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/sys-dashboard/",
    "label_parent_vn": "DASHBOARD",
    "routerModule": "/sys-a/dashboard"
  }, {
    "menu_id": 64,
    "parent_menu": 1,
    "label_parent": "DASHBOARD",
    "icon": "pi pi-chart-bar",
    "label": "SellOut",
    "label_vn": "SellOut",
    "routerLink": "/dashboard-sellout",
    "share_link": "#",
    "orders_p": 0,
    "orders": 2,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/sys-dashboard-sellout/",
    "label_parent_vn": "DASHBOARD",
    "routerModule": "/sys-a/dashboard-sellout"
  }, {
    "menu_id": 12,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-list",
    "label": "Kết quả cửa hàng",
    "label_vn": "Kết quả cửa hàng",
    "routerLink": "/reports",
    "share_link": "#",
    "orders_p": 1,
    "orders": 1,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/report/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/reports"
  }, {
    "menu_id": 44,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-table",
    "label": "Kết quả báo cáo survey",
    "label_vn": "Kết quả báo cáo survey",
    "routerLink": "/works-survey",
    "share_link": "#",
    "orders_p": 1,
    "orders": 2,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-survey/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-survey"
  }, {
    "menu_id": 60,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-gift",
    "label": "DISPLAY",
    "label_vn": "Kết quả báo cáo display",
    "routerLink": "/works-display",
    "share_link": "#",
    "orders_p": 1,
    "orders": 3,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-display/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-display"
  }, {
    "menu_id": 61,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-box",
    "label": "OSA",
    "label_vn": "Kết quả báo cáo OSA",
    "routerLink": "/works-osa",
    "share_link": "#",
    "orders_p": 1,
    "orders": 4,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-osa/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-osa"
  }, {
    "menu_id": 62,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-table",
    "label": "OOL",
    "label_vn": "Kết quả báo cáo OOL",
    "routerLink": "/works-ool",
    "share_link": "#",
    "orders_p": 1,
    "orders": 5,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-ool/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-ool"
  }, {
    "menu_id": 66,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-table",
    "label": "Kết quả báo cáo SELL OUT",
    "label_vn": "Kết quả báo cáo SELL OUT",
    "routerLink": "/works-sellout",
    "share_link": "#",
    "orders_p": 1,
    "orders": 6,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-sellout/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-sellout"
  }, {
    "menu_id": 68,
    "parent_menu": 4,
    "label_parent": "REPORT",
    "icon": "pi pi-table",
    "label": "SELL IN",
    "label_vn": "Kết quả báo cáo SELL IN",
    "routerLink": "/works-sellin",
    "share_link": "#",
    "orders_p": 1,
    "orders": 7,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/works-sellin/",
    "label_parent_vn": "BÁO CÁO",
    "routerModule": "/sys-a/works-sellin"
  }, {
    "menu_id": 6,
    "parent_menu": 2,
    "label_parent": "PROJECT",
    "icon": "pi pi-user",
    "label": "Quản lý nhân viên",
    "label_vn": "Quản lý nhân viên",
    "routerLink": "/users",
    "share_link": "#",
    "orders_p": 2,
    "orders": 1,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/sys-user/",
    "label_parent_vn": "Dự án",
    "routerModule": "/sys-a/users"
  }, {
    "menu_id": 7,
    "parent_menu": 2,
    "label_parent": "PROJECT",
    "icon": "pi pi-home",
    "label": "Quản lý cửa hàng",
    "label_vn": "Quản lý cửa hàng",
    "routerLink": "/stores",
    "share_link": "#",
    "orders_p": 2,
    "orders": 2,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/sys-store/",
    "label_parent_vn": "Dự án",
    "routerModule": "/sys-a/stores"
  }, {
    "menu_id": 10,
    "parent_menu": 2,
    "label_parent": "PROJECT",
    "icon": "pi pi-calendar-plus",
    "label": "Quản lý LLV",
    "label_vn": "Quản lý LLV",
    "routerLink": "/plans",
    "share_link": "#",
    "orders_p": 2,
    "orders": 3,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/plan/",
    "label_parent_vn": "Dự án",
    "routerModule": "/sys-a/plans"
  }, {
    "menu_id": 33,
    "parent_menu": 14,
    "label_parent": "MASTER",
    "icon": "pi pi-calendar-minus",
    "label": "Ca làm việc",
    "label_vn": "Ca làm việc",
    "routerLink": "/plans/shift",
    "share_link": "#",
    "orders_p": 4,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "MASTER",
    "routerModule": "/sys-a/plans/shift"
  }, {
    "menu_id": 8,
    "parent_menu": 55,
    "label_parent": "POSM",
    "icon": "pi pi-briefcase",
    "label": "POSM",
    "label_vn": "POSM",
    "routerLink": "/posm",
    "share_link": "#",
    "orders_p": 4,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "POSM",
    "routerModule": "/sys-a/posm"
  }, {
    "menu_id": 9,
    "parent_menu": 54,
    "label_parent": "OSA",
    "icon": "pi pi-box",
    "label": "Đăng ký",
    "label_vn": "Đăng ký",
    "routerLink": "/osa",
    "share_link": "#",
    "orders_p": 4,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/osa-stockout/",
    "label_parent_vn": "OSA",
    "routerModule": "/sys-a/osa"
  }, {
    "menu_id": 63,
    "parent_menu": 14,
    "label_parent": "MASTER",
    "icon": "pi pi-calendar",
    "label": "KPI Scheduler",
    "label_vn": "Lập lịch của từng KPI",
    "routerLink": "/kpi-scheduler",
    "share_link": "#",
    "orders_p": 4,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "MASTER",
    "routerModule": "/sys-a/kpi-scheduler"
  }, {
    "menu_id": 32,
    "parent_menu": 55,
    "label_parent": "POSM",
    "icon": "pi pi-briefcase",
    "label": "Item POSM",
    "label_vn": "Item POSM",
    "routerLink": "/posm/posm-list",
    "share_link": "#",
    "orders_p": 4,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "POSM"
  }, {
    "menu_id": 15,
    "parent_menu": 14,
    "label_parent": "MASTER",
    "icon": "pi pi-database",
    "label": "Danh sách sản phẩm",
    "label_vn": "Danh sách sản phẩm",
    "routerLink": "/osa/product",
    "share_link": "#",
    "orders_p": 4,
    "orders": 3,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/products/",
    "label_parent_vn": "MASTER",
    "routerModule": "/sys-a/osa/product"
  }, {
    "menu_id": 16,
    "parent_menu": 14,
    "label_parent": "MASTER",
    "icon": "pi pi-book",
    "label": "Ngành hàng",
    "label_vn": "Danh sách loại sản phẩm",
    "routerLink": "/osa/product/category",
    "share_link": "#",
    "orders_p": 4,
    "orders": 4,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/categories/",
    "label_parent_vn": "MASTER",
    "routerModule": "/sys-a/osa/product/category"
  }, {
    "menu_id": 34,
    "parent_menu": 53,
    "label_parent": "SURVEY",
    "icon": "pi pi-table",
    "label": "Form Survey",
    "label_vn": "Form Survey",
    "routerLink": "/survey/details",
    "share_link": "#",
    "orders_p": 4,
    "orders": 4,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/survey-form/",
    "label_parent_vn": "SURVEY",
    "routerModule": "/sys-a/survey/details"
  }, {
    "menu_id": 11,
    "parent_menu": 53,
    "label_parent": "SURVEY",
    "icon": "pi pi-table",
    "label": "Đăng ký",
    "label_vn": "Đăng ký",
    "routerLink": "/survey",
    "share_link": "#",
    "orders_p": 4,
    "orders": 4,
    "check": 1,
    "is_proxy": 1,
    "proxy_link": "/survey-shop/",
    "label_parent_vn": "SURVEY",
    "routerModule": "/sys-a/survey"
  }, {
    "menu_id": 59,
    "parent_menu": 14,
    "label_parent": "MASTER",
    "icon": "pi pi-language",
    "label": "Ngôn ngữ",
    "label_vn": "Ngôn ngữ",
    "routerLink": "/language",
    "share_link": "#",
    "orders_p": 4,
    "orders": 4,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "MASTER",
    "routerModule": "/sys-a/language"
  }, {
    "menu_id": 49,
    "parent_menu": 58,
    "label_parent": "OOL",
    "icon": "pi pi-table",
    "label": "Form OOL",
    "label_vn": "Form OOL",
    "routerLink": "/ool-shop/ool-list",
    "share_link": "#",
    "orders_p": 4,
    "orders": 5,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "OOL"
  }, {
    "menu_id": 30,
    "parent_menu": 52,
    "label_parent": "DISPLAY",
    "icon": "pi pi-th-large",
    "label": "Đăng ký",
    "label_vn": "Đăng ký",
    "routerLink": "/promo",
    "share_link": "#",
    "orders_p": 4,
    "orders": 5,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/display-shop/",
    "label_parent_vn": "DISPLAY",
    "routerModule": "/sys-a/promo"
  }, {
    "menu_id": 31,
    "parent_menu": 52,
    "label_parent": "DISPLAY",
    "icon": "pi pi-gift",
    "label": "Chương trình",
    "label_vn": "Chương trình",
    "routerLink": "/promo/item",
    "share_link": "#",
    "orders_p": 4,
    "orders": 5,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/display-promotion/",
    "label_parent_vn": "DISPLAY",
    "routerModule": "/sys-a/promo/item"
  }, {
    "menu_id": 46,
    "parent_menu": 58,
    "label_parent": "OOL",
    "icon": "pi pi-th-large",
    "label": "Đăng ký",
    "label_vn": "Đăng ký",
    "routerLink": "/ool-shop",
    "share_link": "#",
    "orders_p": 4,
    "orders": 6,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "OOL"
  }, {
    "menu_id": 37,
    "parent_menu": 38,
    "label_parent": "SELL.OUT",
    "icon": "pi pi-shopping-bag",
    "label": "Sản phẩm tập trung",
    "label_vn": "Sản phẩm tập trung",
    "routerLink": "/topProduct",
    "share_link": "#",
    "orders_p": 5,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/sell-out-top-product/",
    "label_parent_vn": "SELL.OUT",
    "routerModule": "/sys-a/topProduct"
  }, {
    "menu_id": 39,
    "parent_menu": 38,
    "label_parent": "SELL.OUT",
    "icon": "pi pi-user",
    "label": "Nhân viên thực hiện",
    "label_vn": "Đăng ký nhân viên thực hiện",
    "routerLink": "/employee-action",
    "share_link": "#",
    "orders_p": 5,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/sell-out-employee/",
    "label_parent_vn": "SELL.OUT",
    "routerModule": "/sys-a/employee-action"
  }, {
    "menu_id": 40,
    "parent_menu": 38,
    "label_parent": "SELL.OUT",
    "icon": "pi pi-shopping-cart",
    "label": "Chỉ tiêu",
    "label_vn": "Chỉ tiêu",
    "routerLink": "/shop-action",
    "share_link": "#",
    "orders_p": 5,
    "orders": 3,
    "check": 1,
    "is_proxy": 0,
    "proxy_link": "/sell-out-target/",
    "label_parent_vn": "SELL.OUT",
    "routerModule": "/sys-a/shop-action"
  }, {
    "menu_id": 42,
    "parent_menu": 41,
    "label_parent": "SELL.IN",
    "icon": "pi pi-shopping-bag",
    "label": "Sắp xếp sản phẩm",
    "label_vn": "Sắp xếp sản phẩm",
    "routerLink": "/product-order",
    "share_link": "#",
    "orders_p": 6,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "SELL.IN",
    "routerModule": "/sys-a/product-order"
  }, {
    "menu_id": 43,
    "parent_menu": 41,
    "label_parent": "SELL.IN",
    "icon": "pi pi-user",
    "label": "Đăng ký nhân viên thực hiện",
    "label_vn": "Đăng ký nhân viên thực hiện",
    "routerLink": "/sellin-employee",
    "share_link": "#",
    "orders_p": 6,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "SELL.IN",
    "routerModule": "/sys-a/sellin-employee"
  }, {
    "menu_id": 48,
    "parent_menu": 47,
    "label_parent": "OFFICE",
    "icon": "pi pi-book",
    "label": "Work Follow",
    "label_vn": "Work Follow",
    "routerLink": "/workfollow/task-list",
    "share_link": "#",
    "orders_p": 8,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "OFFICE"
  }, {
    "menu_id": 70,
    "parent_menu": 69,
    "label_parent": "ACTIVATION",
    "icon": "pi pi-gift",
    "label": "Gift",
    "label_vn": "Gift",
    "routerLink": "/activation/gifts",
    "share_link": "#",
    "orders_p": 8,
    "orders": 1,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "ACTIVATION",
    "routerModule": "/sys-a/activation/gifts"
  }, {
    "menu_id": 76,
    "parent_menu": 69,
    "label_parent": "ACTIVATION",
    "icon": "pi pi-list",
    "label": "Promotion",
    "label_vn": "Promotion",
    "routerLink": "/activation/promotion",
    "share_link": "#",
    "orders_p": 8,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "ACTIVATION",
    "routerModule": "/sys-a/activation/promotion"
  }, {
    "menu_id": 77,
    "parent_menu": 69,
    "label_parent": "ACTIVATION",
    "icon": "pi pi-table",
    "label": "Promotion Shop",
    "label_vn": "Promotion Shop",
    "routerLink": "/activation/promotion-shop",
    "share_link": "#",
    "orders_p": 8,
    "orders": 3,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "ACTIVATION",
    "routerModule": "/sys-a/activation/promotion-shop"
  }, {
    "menu_id": 71,
    "parent_menu": 74,
    "label_parent": "TRANSPORT",
    "icon": "pi pi-sitemap",
    "label": "Tạo phiếu",
    "label_vn": "Tạo phiếu",
    "routerLink": "/transaction/create",
    "share_link": "#",
    "orders_p": 9,
    "orders": 2,
    "check": 1,
    "is_proxy": 0,
    "label_parent_vn": "TRANSPORT",
    "routerModule": "/sys-a/transaction/create"
  }]
  
  // constructor(public megaMenuService: MegaMenuService) {}

  ngOnInit() {
    let resultArr = [];
    let formatedMegaMenuItems = this.megaMenuData.reduce(function (acc: any, cur: any) {
      let itemFound = acc.find(function(item: any) {
        return item[0].label_parent === cur.label_parent;
      });
      if (itemFound) {
        itemFound.push(cur);
      } else {
        acc.push([cur]);
      }
      return acc;
    }, []);
    let resultItem = formatedMegaMenuItems.map((item: any) => {
      let x = {};
      return x = {
        label: `${item[0].label_parent}`,
        // icon: `${item.icon}`,
        items: [
          [
            {
              label: `${item[0].label_parent}`,
              items: item.map((itemChild: any) => (
                {
                  label: `${itemChild.label}`,
                  icon: `${itemChild.icon}`,
                  url: `${itemChild.routerLink}`
                }
              ))
            }
          ]
        ]
      };
    });
    resultArr.push(resultItem);
    this.megaMenuItems = resultArr[0];
  }
}
