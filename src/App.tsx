import { useState } from 'react';
import { LoginScreen } from './components/auth/LoginScreen';
import { PasswordRecovery } from './components/auth/PasswordRecovery';
import { PasswordReset } from './components/auth/PasswordReset';
import { Onboarding } from './components/auth/Onboarding';
import { MainLayout } from './components/layout/MainLayout';
import { OwnerDashboard } from './components/dashboards/OwnerDashboard';
import { ReceptionistDashboard } from './components/dashboards/ReceptionistDashboard';
import { ProfessionalDashboard } from './components/dashboards/ProfessionalDashboard';
import { ScheduleView } from './components/schedule/ScheduleView';
import { CreateAppointment } from './components/schedule/CreateAppointment';
import { EditAppointment } from './components/schedule/EditAppointment';
import { AppointmentsList } from './components/appointments/AppointmentsList';
import { RegisterService } from './components/appointments/RegisterService';
import { AppointmentDetails } from './components/appointments/AppointmentDetails';
import { CommissionsBalance } from './components/financial/CommissionsBalance';
import { CommissionDetails } from './components/financial/CommissionDetails';
import { PaymentsList } from './components/financial/PaymentsList';
import { CashRegister } from './components/financial/CashRegister';
import { ClientsList } from './components/registrations/ClientsList';
import { ClientForm } from './components/registrations/ClientForm';
import { ProfessionalsList } from './components/registrations/ProfessionalsList';
import { ProfessionalForm } from './components/registrations/ProfessionalForm';
import { ServicesList } from './components/registrations/ServicesList';
import { ServiceForm } from './components/registrations/ServiceForm';
import { CategoriesList } from './components/registrations/CategoriesList';
import { ProfessionalReport } from './components/reports/ProfessionalReport';
import { ServiceReport } from './components/reports/ServiceReport';
import { FinancialReport } from './components/reports/FinancialReport';
import { ProductivityReport } from './components/reports/ProductivityReport';
import { CancellationReport } from './components/reports/CancellationReport';
import { SalonSettings } from './components/settings/SalonSettings';
import { ProfessionalSettings } from './components/settings/ProfessionalSettings';
import { Preferences } from './components/settings/Preferences';
import { ChangeLog } from './components/history/ChangeLog';
import { PaymentHistory } from './components/history/PaymentHistory';
import { CanceledHistory } from './components/history/CanceledHistory';
import { Error404 } from './components/errors/Error404';
import { NoPermission } from './components/errors/NoPermission';
import { SessionExpired } from './components/errors/SessionExpired';
import { OfflineMode } from './components/errors/OfflineMode';

type UserRole = 'owner' | 'receptionist' | 'professional';

type Route = 
  | 'login' 
  | 'password-recovery' 
  | 'password-reset' 
  | 'onboarding'
  | 'dashboard'
  | 'schedule'
  | 'create-appointment'
  | 'edit-appointment'
  | 'appointments-list'
  | 'register-service'
  | 'appointment-details'
  | 'commissions'
  | 'commission-details'
  | 'payments'
  | 'cash-register'
  | 'clients'
  | 'client-form'
  | 'professionals'
  | 'professional-form'
  | 'services'
  | 'service-form'
  | 'categories'
  | 'report-professional'
  | 'report-service'
  | 'report-financial'
  | 'report-productivity'
  | 'report-cancellation'
  | 'salon-settings'
  | 'professional-settings'
  | 'preferences'
  | 'change-log'
  | 'payment-history'
  | 'canceled-history'
  | 'error-404'
  | 'no-permission'
  | 'session-expired'
  | 'offline';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('login');
  const [userRole, setUserRole] = useState<UserRole>('owner');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = (route: Route) => {
    setCurrentRoute(route);
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsAuthenticated(true);
    setCurrentRoute('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentRoute('login');
  };

  // Auth screens
  if (!isAuthenticated) {
    switch (currentRoute) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} onNavigate={navigate} />;
      case 'password-recovery':
        return <PasswordRecovery onNavigate={navigate} />;
      case 'password-reset':
        return <PasswordReset onNavigate={navigate} />;
      case 'onboarding':
        return <Onboarding onComplete={() => navigate('dashboard')} />;
      default:
        return <LoginScreen onLogin={handleLogin} onNavigate={navigate} />;
    }
  }

  // Main app with layout
  const renderContent = () => {
    switch (currentRoute) {
      // Dashboards
      case 'dashboard':
        if (userRole === 'owner') return <OwnerDashboard />;
        if (userRole === 'receptionist') return <ReceptionistDashboard />;
        return <ProfessionalDashboard />;
      
      // Schedule
      case 'schedule':
        return <ScheduleView onNavigate={navigate} userRole={userRole} />;
      case 'create-appointment':
        return <CreateAppointment onNavigate={navigate} />;
      case 'edit-appointment':
        return <EditAppointment onNavigate={navigate} />;
      
      // Appointments
      case 'appointments-list':
        return <AppointmentsList onNavigate={navigate} userRole={userRole} />;
      case 'register-service':
        return <RegisterService onNavigate={navigate} />;
      case 'appointment-details':
        return <AppointmentDetails onNavigate={navigate} userRole={userRole} />;
      
      // Financial
      case 'commissions':
        return <CommissionsBalance onNavigate={navigate} />;
      case 'commission-details':
        return <CommissionDetails onNavigate={navigate} />;
      case 'payments':
        return <PaymentsList onNavigate={navigate} />;
      case 'cash-register':
        return <CashRegister />;
      
      // Registrations
      case 'clients':
        return <ClientsList onNavigate={navigate} userRole={userRole} />;
      case 'client-form':
        return <ClientForm onNavigate={navigate} />;
      case 'professionals':
        return <ProfessionalsList onNavigate={navigate} />;
      case 'professional-form':
        return <ProfessionalForm onNavigate={navigate} />;
      case 'services':
        return <ServicesList onNavigate={navigate} />;
      case 'service-form':
        return <ServiceForm onNavigate={navigate} />;
      case 'categories':
        return <CategoriesList onNavigate={navigate} />;
      
      // Reports
      case 'report-professional':
        return <ProfessionalReport />;
      case 'report-service':
        return <ServiceReport />;
      case 'report-financial':
        return <FinancialReport />;
      case 'report-productivity':
        return <ProductivityReport />;
      case 'report-cancellation':
        return <CancellationReport />;
      
      // Settings
      case 'salon-settings':
        return <SalonSettings />;
      case 'professional-settings':
        return <ProfessionalSettings />;
      case 'preferences':
        return <Preferences />;
      
      // History
      case 'change-log':
        return <ChangeLog />;
      case 'payment-history':
        return <PaymentHistory />;
      case 'canceled-history':
        return <CanceledHistory />;
      
      // Errors
      case 'error-404':
        return <Error404 onNavigate={navigate} />;
      case 'no-permission':
        return <NoPermission onNavigate={navigate} />;
      case 'session-expired':
        return <SessionExpired onNavigate={navigate} />;
      case 'offline':
        return <OfflineMode />;
      
      default:
        return <OwnerDashboard />;
    }
  };

  return (
    <MainLayout 
      userRole={userRole}
      onNavigate={navigate}
      onLogout={handleLogout}
      currentRoute={currentRoute}
    >
      {renderContent()}
    </MainLayout>
  );
}
