const commonThings = {

  newcharge: "Add New charge",
  addnewcharge: {
    chargeDetails: "Charge Details",
    name: "Name *",
    amount: "Amount *",
    gst: {
      default: "GST@ 0.0%",
      gstRate: "GST Rate",
      gst25: "GST@ 0.25%",
      gst3: "GST@ 3.0%",
      gst5: "GST@ 5.0%",
      gst12: "GST@ 12.0%",
      gst18: "GST@ 18.0%",
      gst28: "GST@ 28.0%",
    },

    description: "Description",
    code: "HSN Code",
    cancel: "Cancel",
    save: "Save",

    required: {
      name: "Required!",
      amount: "Required!",
    },

  },

  shippingCharge: "Shipping Charge",
  shippingGST: {
    default: "GST@ 0.0%",
    gstRate: "GST Rate",
    gst25: "GST@ 0.25%",
    gst3: "GST@ 3.0%",
    gst5: "GST@ 5.0%",
    gst12: "GST@ 12.0%",
    gst18: "GST@ 18.0%",
    gst28: "GST@ 28.0%",
  },

  packagingCharge: "Packaging Charge",
  packagingGST: {
    default: "GST@ 0.0%",
    gstRate: "GST Rate",
    gst25: "GST@ 0.25%",
    gst3: "GST@ 3.0%",
    gst5: "GST@ 5.0%",
    gst12: "GST@ 12.0%",
    gst18: "GST@ 18.0%",
    gst28: "GST@ 28.0%",
  },
  paymentType: "Add Payment Type",
  select: "Select Payment Mode",
  paymentMode: "Payment Modes",
  modes: {
    selectMode: "Select Mode",
    upi: "UPI"
  },

  selectAccount: "Select Account",
  cancel: "Cancel",
  save: "Save",
  cash: "CASH{amount}",
  totalPayment: "Total Payments{}",

  time: {
    hourlyWage: "Hourly Wage {}",
    hour: "Hour(s)",
    minute: "Minute(s)"
  },

  thermalOn: {
    printerSettings: "Printer Settings",

    printer_Settings: {

      default: "Default Printer",
      selectPrinter: "Select Printer",
    },

    theme: "Themes",
    themes: {
      companyName: "Company Name Size",
    },


    printDefault: "Make Regular Printer Default",
    printCompanyInfo: "Print Company Info/Header",
    printCompany: {

      companyName: "Print Company Name",
      logo: "Company Logo",
      address: "Address",
    },

    totalsAndTaxes: "Total & Taxes",
    totals_Taxes: {

      itemQuantity: "Total Item Quantity",
      amountWithDecimal: "Amount with Decimal (eg.0.00)",
      receivedAmount: "Received Amount",
      balanceAmount: "Balance Amount",
    },

    footer: "Footer",
    footerOn: {

      description: "Print Description",
      termsAndConditions: "Terms and Conditions",

    },


  },

  regularOn: {

    printDefault: "Make Regular Printer Default",
    printCompanyInfo: "Print Company Info/Header",
    printCompany: {

      companyName: "Print Company Name",
      logo: "Company Logo",
      address: "Address",
    },

    totalsAndTaxes: "Total & Taxes",
    totals_Taxes: {

      itemQuantity: "Total Item Quantity",
      amountWithDecimal: "Amount with Decimal (eg.0.00)",
      receivedAmount: "Received Amount",
      balanceAmount: "Balance Amount",
    },

    footer: "Footer",
    footerOn: {

      description: "Print Description",
      termsAndConditions: "Terms and Conditions",

    },
  },
}


const profile = {
  profile: "Profile",
  view: "View Your Profile",

  businessDetials: "Business Detials",
  Detials: {
    name: "Bussiness Name *",
    gstin: "GSTIN",
    state: "State/UT",
    states: {
      select: "Select State/UT",
      search: "Search By Keyword",
      jammuAndKashmir: "JAMMU & KASHMIR - 01",
      himachalPradesh: "HIMACHAL PRADESH - 02",
      punjab: "PUNJAB - 03",
      chandigarh: "CHANDIGARH - 04",
      uttarakhand: "UTTARAKHAND - 05",
      haryana: "HARYANA - 06",
      delhi: "DELHI - 07",
      rajasthan: "RAJASTHAN - 08",
      uttarPradesh: "UTTAR PRADESH - 09",
      bihar: "BIHAR - 10",
      sikkim: "SIKKIM - 11",
      arunachalPradesh: "ARUNACHAL PRADESH - 12",
      nagaland: "NAGALAND - 13",
      manipur: "MANIPUR - 14",
      mizoram: "MIZORAM- 15",
      tripura: "TRIPURA - 16",
      meghalaya: "MEGHALAYA - 17",
      assam: "ASSAM - 18",
      westBengal: "WEST BENGAL - 19",
      jharkhand: "JHARKHAND - 20",
      odisha: "ODISHA - 21",
      chhattisgarh: "CHHATTISGARH- 22",
      madhyaPradesh: "MADHYA PRADESH - 23",
      gujarat: "GUJARAT - 24",
      dadraAndNagarHaveliAndDamanAndDiu: "DADRA AND NAGAR HAVELI AND DAMAN AND DIU - 26",
      maharashtra: "MAHARASHTRA - 27",
      andhraPradesh: "ANDHRA PRADESH - 28",
      karnataka: "KARNATAKA - 29",
      goa: "GOA - 30",
      lakshadweep: "LAKSHASWEEP - 31",
      kerala: "KERALA - 32",
      tamilNadu: "TAMIL NADU - 33",
      puducherry: "PUDUCHERRY - 34",
      andamanAndNicobarIslands: "ANDAMAN AND NICOBAR ISLANDS - 35",
      telangana: "TELANGANA - 36",
      ladakh: "LADAKH - 38",
      otherTerritory: "OTHER TERRITORY - 97",
      centreJurisdiction: "CENTRE JURISDICTION - 99",


    },
  },

  businesscontact: "Business Contact",
  contact: {
    email: "Email *",
    phone: "Phone *"
  },

  address: "Address",
  address: {
    hsl: "House / Shop / Locality *",
    street: "Street *",
    city: "City *",
    postalcode: "Postal Code *",
  },

  personalDetails: "Personal Details",
  p_Details: {
    name: "Name *",
    email: "Email *",
    phone: "Phone *"
  },
  save: "Save",
  update: "Profile Updated Successfully!",
  required: {
    businessName: "Business name is required!",
    email: "Business email is required!",
    phone: "Business phone is required!",
    hsl: "field is required!",
    street: "field is required!",
    city: "field is required!",
    postalCode: "field is required!",
    name: "Name is required!",
    phone: "Phone is required!",
  }

}

const home = {
  home: "Home",
  todayRevenue: "Today's Revenue",
  monthRevenue: "Month's Revenue",
  todaySales: "Today's Sales",
  totalProduct: "Total Product",
  lowStockItems: "Low Stock Items",
  activeCustomers: "Active Customers",

  create: "Create",
  create: {
    sale: "Sale",

    sale: {
      addSale: "ADD SALE",
      cash: "Cash",
      credit: "Credit",
      creditOn: {
        balance: "Balance Due:{amount}",
        warning: "Customer detail is required",
      },
      invoice: "Invoice No.",
      date: "Date",
      customer: "Customer",
      edit: "Edit",

      editDetails: {
        customerDetails: "Customer Details",
        name: "Customer Name",
        phone: "Phone",
        email: "Email",
        DOB: "DOB",
        cancel: "Cancel",
        save: "Save",
        required: {
          name: "Required Field!",
          phone: "Required Field!"
        },
      },

      addItems: "Add Items",
      add_Items: {
        addItemSale: "ADD ITEM TO SALE",
        name: "Item Name *",

        itemName: {
          enter: "Enter product name or product code",
        },
        quantity: "Quantity *",

        rate: "Rate (Price/Unit) *",
        tax: {
          withouttax: "Without Tax",
          withtax: "With Tax"
        },

        description: "Description",
        saveNew: "Save & New",
        save: "Save",

        required: {
          itemName: "Item name is required!!",
          quantity: "Quantity is required!!",
          rate: "Rate is required!!"
        },
      },

      othercharge: "Other Charges",
      newcharge: "Add New charge",
      addnewcharge: {
        chargeDetails: "charge Details",
        name: "Name *",
        amount: "Amount *",
        gst: {
          default: "GST@ 0.0%",
          gstRate: "GST Rate",
          gst25: "GST@ 0.25%",
          gst3: "GST@ 3.0%",
          gst5: "GST@ 5.0%",
          gst12: "GST@ 12.0%",
          gst18: "GST@ 18.0%",
          gst28: "GST@ 28.0%",
        },

        description: "Description",
        code: "HSN Code",
        cancel: "Cancel",
        save: "Save",

        required: {
          name: "Required!",
          amount: "Required!",
        },

      },

      shippingCharge: "Shipping Charge",
      shippingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      packagingCharge: "Packaging Charge",
      packagingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      total: "Total Amount:{amount}",
      payment: "Payment Paid",
      add: {
        paymentType: "Add Payment Type",
        select: "Select Payment Mode",
        paymentMode: "Payment Modes",
        modes: {
          selectMode: "Select Mode",
          upi: "UPI"
        },

        selectAccount: "Select Account",
        cancel: "Cancel",
        save: "Save",
      },

      cash: "CASH{amount}",
      totalPayment: "Total Payments{}",
      orderNo: "Buyer's Order Number",
      despatched: "Despatched Through",
      delivery: "Delivery Note",
      cancel: "Cancel",
      save: "Save",
      warning: "Items not added",
    },

    purchase: {
      createPurchase: "Create Purchase",
      cash: "Cash",
      credit: "Credit",
      creditOn: {
        balance: "Balance Due:{amount}",
        warning: "Customer detail is required",
      },
      invoice: "Invoice No.",
      date: "Date",
      supplier: "Supplier",
      edit: "Edit",

      editDetails: {
        supplierDetails: "Supplier Details",
        name: "Supplier Name",
        phone: "Phone",
        email: "Email",
        DOB: "DOB",
        cancel: "Cancel",
        save: "Save",
        required: {
          name: "Required Field!",
          phone: "Required Field!"
        },
      },

      addItems: "Add Items",
      add_Items: {
        addItemSale: "ADD ITEM TO PURCHASE",
        name: "Item Name *",

        itemName: {
          enter: "Enter product name or product code",
        },
        quantity: "Quantity *",

        rate: "Rate (Price/Unit) *",
        tax: {
          withouttax: "Without Tax",
          withtax: "With Tax"
        },

        description: "Description",
        saveNew: "Save & New",
        save: "Save",

        required: {
          itemName: "Item name is required!!",
          quantity: "Quantity is required!!",
          rate: "Rate is required!!"
        },
      },

      othercharge: "Other Charges",
      newcharge: "Add New charge",
      addnewcharge: {
        chargeDetails: "Charge Details",
        name: "Name *",
        amount: "Amount *",
        gst: {
          default: "GST@ 0.0%",
          gstRate: "GST Rate",
          gst25: "GST@ 0.25%",
          gst3: "GST@ 3.0%",
          gst5: "GST@ 5.0%",
          gst12: "GST@ 12.0%",
          gst18: "GST@ 18.0%",
          gst28: "GST@ 28.0%",
        },

        description: "Description",
        code: "HSN Code",
        cancel: "Cancel",
        save: "Save",

        required: {
          name: "Required!",
          amount: "Required!",
        },

      },

      shippingCharge: "ShippingCharge",
      shippingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      packagingCharge: "Packaging Charge",
      packagingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      total: "Total Amount:{amount}",
      payment: "Payment Paid",
      add: {
        paymentType: "Add Payment Type",
        select: "Select Payment Mode",
        paymentMode: "Payment Modes",
        modes: {
          selectMode: "Select Mode",
          upi: "UPI"
        },

        selectAccount: "Select Account",
        cancel: "Cancel",
        save: "Save",
      },

      cash: "CASH{amount}",
      totalPayment: "Total Payments{}",
      cancel: "Cancel",
      save: "Save"
    },

    quotation: {
      createProforma: "CREATE PROFORMA",
      quotation: "Quotation No.",
      date: "Date",
      customer: "Customer",
      edit: "Edit",

      editDetails: {
        customerDetails: "Customer Details",
        name: "Customer Name",
        phone: "Phone",
        email: "Email",
        DOB: "DOB",
        cancel: "Cancel",
        save: "Save",
        required: {
          name: "Required Field!",
          phone: "Required Field!"
        },
      },

      addItems: "Add Items",
      add_Items: {
        addItemSale: "ADD ITEM TO QUOTATION",
        name: "Item Name *",

        itemName: {
          enter: "Enter product name or product code",
        },
        quantity: "Quantity *",

        rate: "Rate (Price/Unit) *",
        tax: {
          withouttax: "Without Tax",
          withtax: "With Tax"
        },

        description: "Description",
        saveNew: "Save & New",
        save: "Save",

        required: {
          itemName: "Item name is required!!",
          quantity: "Quantity is required!!",
          rate: "Rate is required!!"
        },
      },

      othercharge: "Other Charges",
      newcharge: "Add New charge",
      addnewcharge: {
        chargeDetails: "Charge Details",
        name: "Name *",
        amount: "Amount *",
        gst: {
          default: "GST@ 0.0%",
          gstRate: "GST Rate",
          gst25: "GST@ 0.25%",
          gst3: "GST@ 3.0%",
          gst5: "GST@ 5.0%",
          gst12: "GST@ 12.0%",
          gst18: "GST@ 18.0%",
          gst28: "GST@ 28.0%",
        },

        description: "Description",
        code: "HSN Code",
        cancel: "Cancel",
        save: "Save",

        required: {
          name: "Required!",
          amount: "Required!",
        },

      },

      shippingCharge: "ShippingCharge",
      shippingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      packagingCharge: "Packaging Charge",
      packagingGST: {
        default: "GST@ 0.0%",
        gstRate: "GST Rate",
        gst25: "GST@ 0.25%",
        gst3: "GST@ 3.0%",
        gst5: "GST@ 5.0%",
        gst12: "GST@ 12.0%",
        gst18: "GST@ 18.0%",
        gst28: "GST@ 28.0%",
      },

      total: "Total Amount:{amount}",
      cancel: "Cancel",
      save: "Save"
    },

    payments: {
      createPayment: "Create Payment",
      in: "In",
      out: "Out",
      out: {
        payment: "Payment Paid:{amount}",
        warning: "There should be some amount",
      },
      invoice: "Invoice No.",
      date: "Date",
      partyName: "Party Name",
      phone: "Phone",
      cash: "CASH{amount}",
      totalPayment: "Total Payments{}",
      cancel: "Cancel",
      save: "Save"
    },


    quickInvoice: {
      quickInvoice: "Quick Invoice",
      itemName: "Item Name",
      rate: "Rate",
      qty: "Quantity",
      total: "Total",
      productPrice: "Product Price",
      totalAmount: "Total Amount{amount}",
      next: "Next"

    },

    catalogue: {
      catalogues: "Catalogues",
      createCatalogue: "Create Catalogue",

      createCatalogue: {
        selectCatalogue: "Select Catalogue",
        type: "Type",
        productTheme: "Product Theme",
      },
      empty: "Looks like you dont't have any catalogue Create one",

    },

    expense: {
      expenses: "Ewpenses",
      addExpense: "ADD EXPENCE",
      invoice: "Invoice No.",
      date: "Date",
      expenseCategory: "Expense Category",
      amount: "Amount *",
      expenseDescription: "Expense Description *",
      attachment: "Attachment",
      attach: {
        chooseImage: "Choose Image",
        gallery: "Open Gallery",
        camera: "Open Camera",
      },
      payment: "Payment Paid",
      //add from common
      required: {
        expenseCategory: "Category is required",
        amount: "Amount is required",
        description: "Description is required",
      },
    },






  },

  quickAccess: "Quick Access",
  quick_Access: {

    staffAttendance: "Staff Attendance",
    attendance: {

      mark: "Mark Attendance",
      enter: "Enter Name, Phone or Email",
      totalStaff: "Total Staff",
      present: "Present",
      absent: "Adsent",
      holiday: "Holiday",
      notMarked: "Not Marked",
      addOvertime: "Add Overtime",
      overtime: {
        hourlyWage: "Hourly Wage {}",
        hour: "Hour(s)",
        minute: "Minute(s)"
      },

      lateFine: "Late Fine",
      fine: {
        //add from common
        addLateFine: "Add Late Fine",
      },

      paidHoliday: "Paid Holiday",
      halfDay: "Half Day",
      reset: "Reset",
      //save
    },

    connectPrinter: "Connect Printer",
    printer: {
      addPrinter: "Add Printer",
      devices: "No Paired Devices Found",
      scanPrinter: "Scan Printers",
    },

    invoiceSettings: "Invoice Settings",
    invoice: {
      invoicePrintSettings: "INVOICE PRINT SETTINGS",
      regular: "regular",
      regularOn: {

        printDefault: "Make Regular Printer Default",
        printCompanyInfo: "Print Company Info/Header",
        printCompany: {

          companyName: "Print Company Name",
          logo: "Company Logo",
          address: "Address",
        },

        totalsAndTaxes: "Total & Taxes",
        totals_Taxes: {

          itemQuantity: "Total Item Quantity",
          amountWithDecimal: "Amount with Decimal (eg.0.00)",
          receivedAmount: "Received Amount",
          balanceAmount: "Balance Amount",
        },

        footer: "Footer",
        footerOn: {

          description: "Print Description",
          termsAndConditions: "Terms and Conditions",

        },
      },

      thermal: "Thermal",
      printDefault: "Make Thermal Printer Default",
      thermalOn: {
        printerSettings: "Printer Settings",

        printer_Settings: {

          default: "Default Printer",
          selectPrinter: "Select Printer",
        },

        theme: "Themes",
        themes: {
          companyName: "Company Name Size",
        },


        printDefault: "Make Regular Printer Default",
        printCompanyInfo: "Print Company Info/Header",
        printCompany: {

          companyName: "Print Company Name",
          logo: "Company Logo",
          address: "Address",
        },

        totalsAndTaxes: "Total & Taxes",
        totals_Taxes: {

          itemQuantity: "Total Item Quantity",
          amountWithDecimal: "Amount with Decimal (eg.0.00)",
          receivedAmount: "Received Amount",
          balanceAmount: "Balance Amount",
        },

        footer: "Footer",
        footerOn: {

          description: "Print Description",
          termsAndConditions: "Terms and Conditions",

        },


      },

    },

    printPriceLabel: "Print Price Label",

    priceLabel: {
      printLabels: "PRINT LABELS",
      required: "Please enter all the required values",
      labelDetails: "Label Details",
      details: {

        productName: "Product Name",
        productPrice: "Product Price",
        discountedPrice: "Discounted Price",
        barcode: "Barcode",
        assigncode: "Assign Code",
        quantity: "Quantity",
        printSize: "Print Size",

      },
    },
  },

  salesTrend: "Sales Trend",

}

const products = {
  products: "Products",
  addProducts: "Add Products",
  manageProducts: "Manage Products",

  addProducts: {
    productInfo: "Product Info",
    selectUnit: "Select Unit",

    selectUnit: {
      primaryUnit: "Primary Unit",
      secondaryUnit: "Secondary Unit",

      primaryUnit: {
        search: "Search By Keyword",
        piece: "Piece(pc)",
        dozen: "Dozen(dz)",
        milligrams: "Milligram(mg)",
        cartons: "Cartons(Ctn)",
        kilograms: "Kilograms(kg)",
        cubicMeter: "Cubic Meter(m³)",
        ton: "Ton(t)",
        mililitre: "Mililitre(ml)",
        litre: "Litre(l)",
        grams: "Grams(g)",
        packet: "Packet(pkt)",
      },

      secondaryUnit: {
        search: "Search By Keyword",
        piece: "Piece(pc)",
        dozen: "Dozen(dz)",
        milligrams: "Milligram(mg)",
        cartons: "Cartons(Ctn)",
        kilograms: "Kilograms(kg)",
        cubicMeter: "Cubic Meter(m³)",
        ton: "Ton(t)",
        mililitre: "Mililitre(ml)",
        litre: "Litre(l)",
        grams: "Grams(g)",
        packet: "Packet(pkt)",
      },
      reset: "Reset",
      save: "Save",


    },
    code: "Product Code",
    description: "Product Description",
    type: "Type",

    type: {
      product: "Product",
      service: "Service",

      product: {
        stockQuantity: "Stock Quantity",
        minStockQuantity: "Minimum Stock Quantity",
      },
    },
    hasVarient: "Has Varient",

    hasVarient: {
      yes: "Yes",
      no: "No",
    },
    inventaryDetail: "Inventary Detail",

    inventory: {
      productPrice: "Product Price",
      productPrice: {
        withTax: "With Tax",
        withoutTax: "Without Tax",
      },
      discountPercentage: "Discount Percentage",
      barcode: "Barcode",
      assignCode: "Assign Code",
      productImage: "Product Image",
      category: "Category",
      gst: "GST",
      gst: {
        hsnSac: "HSN/SAC",
        gstRate: "GST Rate",
      },
      inventory: "Inventory",

      inventory: {
        instock: "InStock",
        outstock: "OutStock",
      },
      reset: "Reset",
      warning: "Product name is required",
      warning: "Category is required",
    },

    manageProducts: {
      products: "Products",
      add: "ADD NEW ITEMS",
      warning: "Looks like you don't have any item Create One"
    },






  },

}

const sale = {

  sale: "Sale",
  sale: {

    createSale: "Create Sale",
    //sale
    quickInvoice: "Quick Invoice",
    //quickInvoice
    saleReturn: "Sale Return",
    sale_Return: {
      saleReturn: "SALE RETURN",
      invoiceNo: "Invoice No.",
      date: "Date",
      customer: "Customer",
      edit: "Edit",

      editDetails: {
        customerDetails: "Customer Details",
        name: "Customer Name",
        phone: "Phone",
        email: "Email",
        DOB: "DOB",
        cancel: "Cancel",
        save: "Save",
        required: {
          name: "Required Field!",
          phone: "Required Field!"
        },
      },
      invoiceDate: "Invoice Date",
      invoiceNumber: "Invoice Number",
      deductions: "Deductions",
      newcharge: "Add New charge",
      //addnewcharge 
      shippingCharge: "Shipping Charge",
      //shippingGST
      balance: "Balance Due:{amount}",
      totalAmount: "Total Amount {}",
      //cancel & save
      warning: "Customer detail is required",
    },

    createQuotation: "Create Quotation",
    create_Quotation: {
      createProforma: "CREATE PROFORMA",
      //quotation
    },
  },
}

const purchase = {
  purchase: "Purchase",
  createPurchase: "CREATE PURCHASE",
  //purchase  

}

const staff = {
  addstaff: "Add Staff",
  add_staff: {

    newstaff: "NEW STAFF",
    personalDetails: " Personal Details",
    p_Details: {
      name: "Name *",
      email: "Email *",
      phone: "Phone *",
      role: "Role *",
    },
    salaryDetails: "Salary Details",
    s_Details: {
      working: "Working Hrs Per Day",
      rate: "Hourly Rate",
    },
    //cancel & save
    required: {
      name: "Required Value!",
      email: "Required Value!",
      phone: "Required Value!",
    },
  },

  manageStaff: "Manage Staff",

  manage_Staff: {
    staff: "STAFF",
    staffDetail: {

      staffDetails: "STAFF DETAILS",
      name: "Name",
      phone: "Phone",
      email: "Email",
      balance: "Balance{}",
      dob: "DOB",
      workingHrs: "Working Hrs",
      hourlyRate: "Hourly Rate",
      createdAt: "Created At",
      editStaff: "EDIT STAFF",
      //Add staff

    },

    addNewStaff: "Add New Staff",

  },

  payroll: "Payroll",
  staffPayment: {
    staffPayments: "STAFF PAYMENTS",
    enter: "Enter Name, Phone or Email",
    balance: "Balance",
    totalEarning: "Total Earning",
    payments: "Payments",
    wageSummary: "Wage Summary",
    payments: "Payments",
    paymentOn: {
      addNewPayment: "Add New Payment",
      addPayment: {
        createPayment: "Create Payment",
        staffDetails: "Staff Details",
        name: "Name",
        email: "Email",
        paymentDetails: "Payment Details",
        amount: "Amount *",
        paymentType: "Payment Type *",
        P_Type: {
          advance: "ADVANCE",
          salary: "SALARY",
          other: "OTHER",
        },
        date: "Date *",
        description: "Description",
        //cancel & save

      },
    },
    required: {
      default: "No staff has been selected!",
      notexist: "No Results Found!",
      wageSummary: "No Summary Found!",
      payments: "No Payments Found!",
      amount: "Field is required!",
      paymentType: "Field is required!",
    },

  },

  attendance: "Attendance",
  //mark attendance

}

const printLabel = {

  printLabel: "Print Label",
  //printPriceLable
}

const invoiceSettings = {

  invoiceSettings: "Invoice Settings",
  //invoice print settings
}

const invoices = {

  invoices: "INVOICES",
  saleinvoices: "Sale Invoices",
  addnewsale: "Add New Sale",
  //add sale


  proformaQuotations: "Proforma Quotations",
  createProforma: "Create Proforma",
  //quotation

  purchase: "Purchase",
  addNewPurchase: "Add New Purchase",
  //create purchase


  required: {
    saleItem: "Looks like you don't have any sale item Create One",
    proforma: "Looks like you don't have any proforma Create One",
    purchase: "Looks like you don't have any purchase Create One",

  },
}

const product = {

  products: "Products",
  search: "Search By Keyword",
  addNewItem: "Add New Item",
  //add product
}

const party = {

  parties: "PARTIES",
  customer: "Customer",
  cleared: "Cleared",
  addNewCustomer: "Add New Customer",
  addParty: {
    addParty: "ADD PARTY",
    personalDetails: "Personal Details",
    p_Details: {
      name: "Buyer Name *",
      phone: "Phone *",
      email: "Email *",
      dob: "DOB",
    },

    addressDetails: "Address Details",
    address_Details: {

      address: "Address",
      landMark: "Street, Landmark",
      postalCode: "Postal Code",
      city: "City",
      state: "State",
      country: "Country",
      select_Country: {

        selectCountry: "Select Country",
        search: "Search By Keyword",
        //country name 

      },
      //cancel & save

    },
  },
  supplier: "Supplier",
  addNewSupplier: "Add New Supplier",
  addParty: {
    addParty: "ADD PARTY",
    personalDetails: "Personal Details",
    p_Details: {
      name: "Buyer Name *",
      phone: "Phone *",
      email: "Email *",
      dob: "DOB",
    },

    addressDetails: "Address Details",
    address_Details: {

      address: "Address",
      landMark: "Street, Landmark",
      postalCode: "Postal Code",
      city: "City",
      state: "State",
      country: "Country",
      select_Country: {

        selectCountry: "Select Country",
        search: "Search By Keyword",
        //country name 

      },
      //cancel & save

    },

  },


  required: {
    supplier: "Look like you don't have any supplier Create One",
    customer: "Look like you don't have any customer Create One",
    addParty: {
      Name: "Required Field!",
      phone: "Required Field!",
      phoneEnter: "Enter a valid phone number!",
      email: "Enter a valid email!",
    },
  },

}

const accounts = {
  accounts: "Accounts",
  moneyAccounts: "MONEY ACCOUNTS",
  currentDeposits: "Current Deposits",
  dueAmounts: "Due Amounts",
  todaysDebits: "Today's Debits",
  todaysCredits: "Today's Credits",
  account: "Account",
  select_account: {
    select: "Select",
    selectAccount: "Select Account",
    newAccount: "New Account",
    addNewAccount: {

      createPaymentMode: "Create Payment Mode",
      accountDetails: "Account Details",
      accountName: "Account Name *",
      openingBalance: "Opening Balance",
      paymentType: "Payment Type",
      type: {
        cash: "CASH",
        online: "ONLINE",
        onlineOn: {
          paymentModes: "Payment Modes",
          paymentMode: {
            upi: "UPI",
            cheque: "CHEQUE",
            neft: "NEFT",
            rtgs: "RTGS",
            netBanking: "NET BANKING",
            creditCard: "CREDIT CARD",
            debitCard: "DEBIT CARD",

          },
          upi: "UPI",
          upiOn: {
            upiId: "UPI Id *"
          },
          bankAccountDetail: "Bank Account Details",
          accountDetail: {
            accountHolderName: "Account Holder Name",
            bankName: "Bank Name",
            accountNumber: "Account Number *",
            ifscCode: "IFSC Code *",
            saving: "SAVING",
            accountType: "Account Type",
            type: {
              current: "CURRENT",
              saving: "SAVING",
            },
          },
        },
      },

      //cancel & save

    },
  },

  transactions: "Transactions",
  default: "No Transactions Available",
  createTransaction: "Create Transaction",
  create_transaction:{
     newTransaction:"NEW TRANSACTION",
     transactionType:"Transaction Type",
     deposit:"Deposit",
     withdrawal:"Withdrawal",
     account:"Account",
     select:"Select",
     selectAccount: "Select Account",
     newAccount: "New Account",
     //addNewAccount
     transactionDetails:"Transaction Details",
     amount:"Amount *",
     description:"Description *"
     //cancel & save

  },
  required:{

    amount:"Field is required!",
    accountName:"Field is required!",
    description:"Field is required!",
  },

}

const center ={
  helpCenter:"Help Center",
}

const policy ={
  privacyPolicy:"PrivacyPolicy",
}

const Conditions ={
  termsAndConditions:"Terms & Conditions",
}

const logout ={

  logout:"Logout",
}