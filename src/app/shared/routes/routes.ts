export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get citas(): string {
    return this.baseUrl + '/calendario/citas';
  }
  public static get control(): string {
    return this.baseUrl + '/calendario/control';
  }

  // Almuezo Routes
  public static get registroPac(): string {
    return this.baseUrl + '/paciente/registro';
  }
  public static get historiaGeneralPac(): string {
    return this.baseUrl + '/paciente/historia-general';
  }
  public static get pacienteSetting(): string {
    return this.baseUrl + '/paciente/patient-setting';
  }
  public static get HistoriaPaciente(): string {
    return this.baseUrl + '/paciente/historia-paciente/filiacion';
  }
  public static get nuevoPresupuesto(): string {
    return this.baseUrl + '/paciente/historia-paciente/nuevo-presupuesto';
  }
  public static get historiaMedicoPac(): string {
    return this.baseUrl + '/paciente/historia-medico';
  }
  public static get cobroConsultaCaja(): string {
    return this.baseUrl + '/caja/cobro-consulta';
  }
  public static get cobroPresupuestoCaja(): string {
    return this.baseUrl + '/caja/cobro-presupuesto';
  }
  public static get cierreCaja(): string {
    return this.baseUrl + '/caja/cierre';
  }
  public static get gastosCaja(): string {
    return this.baseUrl + '/caja/gastos';
  }
  public static get pagosCaja(): string {
    return this.baseUrl + '/caja/pagos';
  }
  public static get cobroConsulta(): string {
    return this.baseUrl + '/caja/cobro-consulta';
  }
  public static get agregarPagoCaja(): string {
    return this.baseUrl + '/caja/agregar-pago';
  }
  public static get ventasProductoMov(): string {
    return this.baseUrl + '/movimiento/ventas/registro';
  }
  public static get salidaMaterialesMov(): string {
    return this.baseUrl + '/movimiento/salida';
  }
  public static get comprasMov(): string {
    return this.baseUrl + '/movimiento/compras';
  }
  public static get inventarioMov(): string {
    return this.baseUrl + '/movimiento/inventario';
  }
  public static get almacenMov(): string {
    return this.baseUrl + '/movimiento/almacen';
  }

  /* AÑADIDO NUEVAMENTE 25/04/2024*/
  public static get agregarVentas(): string {
    return this.baseUrl + '/movimiento/ventas/nueva';
  }

  public static get productosOp(): string {
    return this.baseUrl + '/operaciones/productos';
  }
  public static get marcaOp(): string {
    return this.baseUrl + '/operaciones/marca';
  }
  public static get categoriaOp(): string {
    return this.baseUrl + '/operaciones/categoria';
  }
  public static get presentacionOp(): string {
    return this.baseUrl + '/operaciones/presentacion';
  }
  public static get tipoOp(): string {
    return this.baseUrl + '/operaciones/tipo-materiales';
  }
  public static get unidadesOp(): string {
    return this.baseUrl + '/operaciones/unidades';
  }
  public static get proveedorOp(): string {
    return this.baseUrl + '/operaciones/proveedor';
  }
  public static get productividadGrafico(): string {
    return this.baseUrl + '/reportes/productividad';
  }
  public static get controlGrafico(): string {
    return this.baseUrl + '/reportes/control';
  }
  public static get produccionMedGrafico(): string {
    return this.baseUrl + '/reportes/produccion-medico';
  }
  public static get comisionMedGrafico(): string {
    return this.baseUrl + '/reportes/comision-medico';
  }

  public static get tipoPagoMant(): string {
    return this.baseUrl + '/mantenimiento/tipo-pago';
  }
  public static get monedaMant(): string {
    return this.baseUrl + '/mantenimiento/moneda';
  }
  public static get bancoMant(): string {
    return this.baseUrl + '/mantenimiento/banco';
  }
  public static get cajaMant(): string {
    return this.baseUrl + '/mantenimiento/caja';
  }
  public static get tipoTarjetaMant(): string {
    return this.baseUrl + '/mantenimiento/tipo-tarjeta';
  }
  public static get tipoGastosMant(): string {
    return this.baseUrl + '/mantenimiento/tipo-gastos';
  }
  public static get cuentaMant(): string {
    return this.baseUrl + '/mantenimiento/cuenta';
  }
  public static get tarifarioMant(): string {
    return this.baseUrl + '/mantenimiento/tarifario';
  }
  public static get diagnosticoMant(): string {
    return this.baseUrl + '/mantenimiento/diagnostico';
  }
  public static get medidaCat(): string {
    return this.baseUrl + '/catalogo/medida';
  }
  public static get alergiasCat(): string {
    return this.baseUrl + '/catalogo/alergias';
  }
  public static get tipoCitadoCat(): string {
    return this.baseUrl + '/catalogo/tipo-citado';
  }
  public static get tipoConceptoCat(): string {
    return this.baseUrl + '/catalogo/tipo-concepto';
  }
  public static get categoriaCat(): string {
    return this.baseUrl + '/catalogo/categoria';
  }
  public static get especialidadCat(): string {
    return this.baseUrl + '/catalogo/especialidad';
  }
  public static get clienteCat(): string {
    return this.baseUrl + '/catalogo/clientes';
  }
  public static get apoderadoCat(): string {
    return this.baseUrl + '/catalogo/apoderado';
  }
  public static get consentimientoCat(): string {
    return this.baseUrl + '/catalogo/consentimiento';
  }
  public static get planesCat(): string {
    return this.baseUrl + '/catalogo/planes';
  }

  public static get usuarioCrud(): string {
    return this.baseUrl + '/configuracion/usuario';
  }
  public static get rolesCrud(): string {
    return this.baseUrl + '/configuracion/rol';
  }
  public static get permisosCrud(): string {
    return this.baseUrl + '/configuracion/permiso';
  }
  public static get miClinicaCrud(): string {
    return this.baseUrl + '/configuracion/clinica';
  }
  public static get tipoDocCrud(): string {
    return this.baseUrl + '/configuracion/tipo-documento';
  }
  public static get sedeCrud(): string {
    return this.baseUrl + '/configuracion/sede';
  }

  public static get login(): string {
    return this.baseUrl + '/login';
  }
  // Dashboard Routes
  public static get adminDashboard(): string {
    return this.baseUrl + '/dashboard/admin-dashboard';
  }
  public static get userDashboard(): string {
    return this.baseUrl + '/dashboard/user-dashboard';
  }
  public static get invitedDashboard(): string {
    return this.baseUrl + '/dashboard/invited-dashboard';
  }

  // Entradas Routes
  public static get agregarEntrada(): string {
    return this.baseUrl + '/entrada/agregar-entrada';
  }
  public static get perfilEntrada(): string {
    return this.baseUrl + '/entrada/perfil-entrada';
  }
  public static get configEmtrada(): string {
    return this.baseUrl + '/entrada/editar-entrada';
  }
  public static get listaEntrada(): string {
    return this.baseUrl + '/entrada/lista-entrada';
  }
  public static get editarEntrada(): string {
    return this.baseUrl + '/entrada/editar-entrada';
  }

  public static get addSchedule(): string {
    return this.baseUrl + '/doctor-schedule/add-schedule';
  }
  public static get editSchedule(): string {
    return this.baseUrl + '/doctor-schedule/edit-schedule';
  }
  public static get schedule(): string {
    return this.baseUrl + '/doctor-schedule/schedule';
  }
  public static get email(): string {
    return this.baseUrl + '/email';
  }
  public static get compose(): string {
    return this.baseUrl + '/email/compose';
  }
  public static get confirmMail(): string {
    return this.baseUrl + '/email/confirm-mail';
  }
  public static get inbox(): string {
    return this.baseUrl + '/email/inbox';
  }
  public static get mailView(): string {
    return this.baseUrl + '/email/mail-view';
  }
  public static get forms(): string {
    return this.baseUrl + '/forms';
  }
  public static get formBasicInputs(): string {
    return this.baseUrl + '/forms/form-basic-inputs';
  }
  public static get formHorizontal(): string {
    return this.baseUrl + '/forms/form-horizontal';
  }
  public static get formInputGroups(): string {
    return this.baseUrl + '/forms/form-input-groups';
  }
  public static get formVertical(): string {
    return this.baseUrl + '/forms/form-vertical';
  }
  public static get gallery(): string {
    return this.baseUrl + '/gallery';
  }
  public static get addInvoice(): string {
    return this.baseUrl + '/invoice/add-invoice';
  }
  public static get createInvoice(): string {
    return this.baseUrl + '/invoice/create-invoice';
  }
  public static get editInvoice(): string {
    return this.baseUrl + '/invoice/edit-invoice';
  }
  public static get editInvoices(): string {
    return this.baseUrl + '/invoice/edit-invoices';
  }
  public static get invoicesGrid(): string {
    return this.baseUrl + '/invoice/invoices-grid';
  }
  public static get allInvoice(): string {
    return this.baseUrl + '/invoice/all-invoice';
  }
  public static get invoicesCancelled(): string {
    return this.baseUrl + '/invoice/invoices-cancelled';
  }
  public static get invoicesDraft(): string {
    return this.baseUrl + '/invoice/invoices-draft';
  }
  public static get invoicesOverdue(): string {
    return this.baseUrl + '/invoice/invoices-overdue';
  }
  public static get invoicesPaid(): string {
    return this.baseUrl + '/invoice/invoices-paid';
  }
  public static get invoicesRecurring(): string {
    return this.baseUrl + '/invoice/invoices-recurring';
  }
  public static get invoicesSettings(): string {
    return this.baseUrl + '/invoice/invoices-settings';
  }
  public static get taxSettings(): string {
    return this.baseUrl + '/invoice/tax-settings';
  }
  public static get viewInvoice(): string {
    return this.baseUrl + '/invoice/view-invoice';
  }

  // Cliente  Routes
  public static get addCliente(): string {
    return this.baseUrl + '/cliente/agregar';
  }
  public static get editClient(): string {
    return this.baseUrl + '/cliente/editar';
  }
  public static get clientProfile(): string {
    return this.baseUrl + '/cliente/client-profile';
  }
  public static get clientSetting(): string {
    return this.baseUrl + '/cliente/client-setting';
  }
  public static get clientsList(): string {
    return this.baseUrl + '/cliente/clients-list';
  }

  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get editProfile(): string {
    return this.baseUrl + '/edit-profile';
  }
  public static get expenseReports(): string {
    return this.baseUrl + '/reports/expense-reports';
  }
  public static get invoiceReports(): string {
    return this.baseUrl + '/reports/invoice-reports';
  }
  public static get setting(): string {
    return this.baseUrl + '/setting';
  }
  public static get settings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get bankSettings(): string {
    return this.baseUrl + '/settings/bank-settings';
  }
  public static get changePassword(): string {
    return this.baseUrl + '/settings/change-password';
  }
  public static get emailSettings(): string {
    return this.baseUrl + '/settings/email-settings';
  }
  public static get localizationDetails(): string {
    return this.baseUrl + '/settings/localization-details';
  }
  public static get othersSettings(): string {
    return this.baseUrl + '/settings/others-settings';
  }
  public static get paymentSettings(): string {
    return this.baseUrl + '/settings/payment-settings';
  }
  public static get seoSettings(): string {
    return this.baseUrl + '/settings/seo-settings';
  }
  public static get socialLinks(): string {
    return this.baseUrl + '/settings/social-links';
  }
  public static get socialSettings(): string {
    return this.baseUrl + '/settings/social-settings';
  }
  public static get themeSettings(): string {
    return this.baseUrl + '/settings/theme-settings';
  }
  public static get addLeave(): string {
    return this.baseUrl + '/staff/add-leave';
  }
  public static get addStaff(): string {
    return this.baseUrl + '/staff/add-staff';
  }
  public static get editLeave(): string {
    return this.baseUrl + '/staff/edit-leave';
  }
  public static get editStaff(): string {
    return this.baseUrl + '/staff/edit-staff';
  }
  public static get staffAttendance(): string {
    return this.baseUrl + '/staff/staff-attendance';
  }
  public static get staffHoliday(): string {
    return this.baseUrl + '/staff/staff-holiday';
  }
  public static get staffLeave(): string {
    return this.baseUrl + '/staff/staff-leave';
  }
  public static get staffList(): string {
    return this.baseUrl + '/staff/staff-list';
  }
  public static get staffProfile(): string {
    return this.baseUrl + '/staff/staff-profile';
  }
  public static get staffSetting(): string {
    return this.baseUrl + '/staff/staff-setting';
  }
  public static get tablesBasic(): string {
    return this.baseUrl + '/tables/tables-basic';
  }
  public static get tablesDataTables(): string {
    return this.baseUrl + '/tables/tables-datatables';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
}
