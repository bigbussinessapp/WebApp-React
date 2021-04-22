import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import BigAbout from "../blogs/BigAbout";
import Feature from "../blogs/Feature";
import Score from "../blogs/Score";
import PaymentDues from "../Finance/Dues/PaymentDues";
import MainFinance from "../Finance/MainFinance";
import PaymentReminders from "../Finance/Reminders/PaymentReminders";
import { TransactionsTable } from "../Finance/TransactionTable/TransactionsTable";
import Dashboard from "../Home/Dashboard";
import Home from "../Home/Home";
import Inventory from "../inventoryManagement/Invetory";
import Invoice from "../InvoiceGeneration/Invoice";
import InvoiceManagement from "../InvoiceManagement/InvoiceManagement";
import Faq from "../Faq/Faq";
import Task from "../Task/Tasks";
import Feedback from "../Feedback/Feedback";
import LoginMain from "../login/LoginMain";
import RegisterMain from "../login/RegisterMain";
import NotFound from "../NotFound";
import Page from "../Profile_Page/Page";
import Profile_Page from "../Profile_Page/Page";
import RegistrationPage from "../Registration/Registration_Page";
import StaffAdminDashboard from "../staffManagement/StaffAdminDashboard";
import StaffManagement from "../staffManagement/StaffManagement";
import PrivateRoute from "./PrivateRoute";

// this function routes through different components by checking urlpath.
function Routes() {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="#blog_id" component={Home} />
      <Route exact path="#contact_id" component={Home} />
      <Route exact path="#feature_id" component={Home} />
      <Route exact path="/AboutBigBusiness" component={BigAbout} />
      <Route exact path="/FeaturesBigBusiness" component={Feature} />
      <Route exact path="/BusinessScore" component={Score} />
      <Route exact path="/" component={Home} />

      <Route exact path="/task" component={Task} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/dues" component={PaymentDues} />
      <Route exact path="/remainders" component={PaymentReminders} />
      <Route exact path="/transactions" component={TransactionsTable} />
      <Route exact path="/RegistrationPage" component={RegistrationPage} />
      <Route exact path="/Page" component={Profile_Page} />
      <Route exact path="/invoicemanage" component={InvoiceManagement} />
      <Route exact path="/mainfinance" component={MainFinance} />
      <Route exact path="/invoice" component={Invoice} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/staff" component={StaffManagement} />
      <Route exact path="/admin" component={StaffAdminDashboard} />
      <Route exact path="/faq" component={Faq} />

      <Route exact path="/register" component={RegisterMain} />
      <Route exact path="/login" component={LoginMain} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />

      {/* public Routes */}
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      {/* <PrivateRoute exact path="/mainfinance" component={MainFinance} /> */}
      {/* <PrivateRoute exact path="/register" component={RegisterMain} /> */}
      {/* <PrivateRoute exact path="/staff" component={StaffManagement} /> */}
      {/* <PrivateRoute exact path="/inventory" component={Inventory} /> */}
      {/* <PrivateRoute exact path="/invoice" component={Invoice} /> */}
      {/* <PrivateRoute exact path="/Page" component={Page} /> */}
      {/* <PrivateRoute
        exact
        path="/invoicemanage"
        component={InvoiceManagementTable}
      /> */}
      {/* <PrivateRoute exact path="/admin" component={StaffAdminDashboard} /> */}
    </Switch>
  );
}

export default Routes;
