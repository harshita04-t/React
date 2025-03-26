const commonThings = {

    newcharge: "নতুন চার্জ যোগ করুন",
    addnewcharge: {
      chargeDetails: "চার্জের বিবরণ",
      name: "নাম *",
      amount: "পরিমাণ *",
      gst: {
        default: "জিএসটি @ 0.0%",
        gstRate: "জিএসটি  হার",
        gst25:   "জিএসটি @ 0.25%",
        gst3:    "জিএসটি @ 3.0%",
        gst5:    "জিএসটি @ 5.0%",
        gst12:   "জিএসটি @ 12.0%",
        gst18:   "জিএসটি @ 18.0%",
        gst28:   "জিএসটি @ 28.0%",
      },
  
      description: "বিবরণ",
      code: "এইচএসএন কোড", //HSN কোড
      cancel: "বাতিল করুন",
      save: "সংরক্ষণ করুন",
  
      required: {
        name: "প্রয়োজন!",
        amount: "প্রয়োজন!",
      },
  
    },
  
    shippingCharge: "শিপিং চার্জ",
    shippingGST: {
      default: "জিএসটি @ 0.0%",
      gstRate: "জিএসটি  হার",
      gst25: "জিএসটি @ 0.25%",
      gst3:  "জিএসটি @ 3.0%",
      gst5:  "জিএসটি @ 5.0%",
      gst12: "জিএসটি @ 12.0%",
      gst18: "জিএসটি @ 18.0%",
      gst28: "জিএসটি @ 28.0%",
    },
  
    packagingCharge: "প্যাকেজিং চার্জ",
    packagingGST: {
      default: "জিএসটি @ 0.0%",
      gstRate: "জিএসটি  হার",
      gst25: "জিএসটি @ 0.25%",
      gst3:  "জিএসটি @ 3.0%",
      gst5:  "জিএসটি @ 5.0%",
      gst12: "জিএসটি @ 12.0%",
      gst18: "জিএসটি @ 18.0%",
      gst28: "জিএসটি @ 28.0%",
    },
    paymentType: "পেমেন্টের ধরণ যোগ করুন",
    select: "পেমেন্ট মোড নির্বাচন করুন",
    paymentMode: "পেমেন্ট মোড",
    modes: {
      selectMode: "মোড নির্বাচন করুন",
      upi: "ইউপিআই", //UPI
    },
  
    selectAccount: "অ্যাকাউন্ট নির্বাচন করুন",
    cancel: "বাতিল করুন",
    save: "সংরক্ষণ করুন",
    cash: "নগদ {}",
    totalPayment: "মোট পেমেন্ট {}",
  
    time: {
      hourlyWage: "ঘণ্টায় মজুরি {}",
      hour: "ঘন্টা (গুলি)",
      minute: "মিনিট (গুলি)"
    },
  
    thermalOn: {
      printerSettings: "প্রিন্টার সেটিংস",
  
      printer_Settings: {
  
        default: "ডিফল্ট প্রিন্টার",
        selectPrinter: "প্রিন্টার নির্বাচন করুন",
      },
  
      theme: "থিম",
      themes: {
        companyName: "কোম্পানির নাম আকার",
      },
  
  
      printDefault: "থার্মাল প্রিন্টারকে ডিফল্ট করুন",
      printCompanyInfo: "কোম্পানির তথ্য/শিরোনাম মুদ্রণ করুন",
      printCompany: {
  
        companyName: "কোম্পানির নাম প্রিন্ট করুন",
        logo: "কোম্পানির লোগো",
        address: "জানুন",
      },
  
      totalsAndTaxes: "মোট এবং কর",
      totals_Taxes: {
  
        itemQuantity: "মোট আইটেমের পরিমাণ",
        amountWithDecimal: "দশমিক সহ পরিমাণ (যেমন.0.00)",
        receivedAmount: "প্রাপ্ত পরিমাণ",
        balanceAmount: "ব্যালেন্সের পরিমাণ",
      },
  
      footer: "পাদলেখ",
      footerOn: {
  
        description: "মুদ্রণ বিবরণ",
        termsAndConditions: "শর্তাবলী",
  
      },
  
  
    },
  
    regularOn: {
  
      printDefault: "নিয়মিত প্রিন্টারকে ডিফল্ট করুন",
      printCompanyInfo: "কোম্পানির তথ্য/শিরোনাম মুদ্রণ করুন",
      printCompany: {
  
        companyName: "কোম্পানির নাম প্রিন্ট করুন",
        logo: "কোম্পানির লোগো",
        address: "জানুন",
      },
  
      totalsAndTaxes: "মোট এবং কর",
      totals_Taxes: {
  
        itemQuantity: "মোট আইটেমের পরিমাণ",
        amountWithDecimal: "দশমিক সহ পরিমাণ (যেমন.0.00)",
        receivedAmount: "প্রাপ্ত পরিমাণ",
        balanceAmount: "ব্যালেন্সের পরিমাণ",
      },
  
      footer: "পাদলেখ",
      footerOn: {
  
        description: "মুদ্রণ বিবরণ",
        termsAndConditions: "শর্তাবলী",
  
      },
    },
  }
  
  
  const profile = {
    profile: "প্রোফাইলের",
    view: "আপনার প্রোফাইল দেখুন",
  
    businessDetials: "ব্যবসার বিবরণ",
    Detials: {
      name: "ব্যবসার নাম *",
      gstin: "GSTIN",
      state: "রাজ্য/কেন্দ্রশাসিত অঞ্চল",
      states: {
        select: "রাজ্য/কেন্দ্রশাসিত অঞ্চল নির্বাচন করুন",
        search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
        jammuAndKashmir: "জম্মু ও কাশ্মীর - 01",
        himachalPradesh: "হিমাচল প্রদেশ - 02",
        punjab: "পাঞ্জাব - 03",
        chandigarh: "চণ্ডীগড় - 04",
        uttarakhand: "উত্তরাখণ্ড - 05",
        haryana: "হরিয়ানা - 06",
        delhi: "দিল্লি - 07",
        rajasthan: "রাজস্থান - 08",
        uttarPradesh: "উত্তরপ্রদেশ - 09",
        bihar: "বিহার - 10",
        sikkim: "সিক্কিম - 11",
        arunachalPradesh: "অরুণাচল প্রদেশ - 12",
        nagaland: "নাগাল্যান্ড - 13",
        manipur: "মণিপুর - 14",
        mizoram: "মিজোরাম- 15",
        tripura: "ত্রিপুরা - 16",
        meghalaya: "মেঘালয় - 17",
        assam: "আসাম - 18",
        westBengal: "পশ্চিমবঙ্গ - 19",
        jharkhand: "ঝাড়খণ্ড - 20",
        odisha: "ওডিশা - 21",
        chhattisgarh: "ছত্তিসগড় - 22",
        madhyaPradesh: "মধ্যপ্রদেশ - 23",
        gujarat: "গুজরাট - 24",
        dadraAndNagarHaveliAndDamanAndDiu: "দাদরা ও নগর হাভেলি এবং দমন ও দিউ - 26",
        maharashtra: "মহারাষ্ট্র - 27",
        andhraPradesh: "অন্ধ্র প্রদেশ - 28",
        karnataka: "কর্ণাটক - 29",
        goa: "গোয়া - 30",
        lakshadweep: "লক্ষদ্বীপ - 31",
        kerala: "কেরালা - 32",
        tamilNadu: "তামিলনাড়ু - 33",
        puducherry: "পুডুচেরি - 34",
        andamanAndNicobarIslands: "আন্দামান ও নিকোবর দ্বীপপুঞ্জ - 35",
        telangana: "তেলেঙ্গানা - 36",
        ladakh: "লাদাখ - 38",
        otherTerritory: "অন্যান্য অঞ্চল - 97",
        centreJurisdiction: "কেন্দ্রের অধিক্ষেত্র - 99",
  
  
      },
    },
  
    businesscontact: "ব্যবসায়িক যোগাযোগ",
    contact: {
      email: "ইমেইল *",
      phone: "ফোন *"
    },
  
    address: "জানুন *",
    address: {
      hsl: "বাড়ি / দোকান / এলাকা *",
      street: "রাস্তা *",
      city: "শহর *",
      postalcode: "পোস্টাল কোড *",
    },
  
    personalDetails: "ব্যক্তিগত বিবরণ",
    p_Details: {
      name: "নাম *",
      email: "ইমেইল *",
      phone: "ফোন *"
    },
    save: "সংরক্ষণ করুন",
    update: "প্রোফাইল সফলভাবে আপডেট করা হয়েছে!",
    required: {
      businessName: "ব্যবসার নাম আবশ্যক!",
      email: "ব্যবসায়িক ইমেল প্রয়োজন!",
      phone: "ব্যবসায়িক ফোন প্রয়োজন!",
      hsl: "ক্ষেত্র প্রয়োজন!",
      street: "ক্ষেত্র প্রয়োজন!",
      city: "ক্ষেত্র প্রয়োজন!",
      postalCode: "ক্ষেত্র প্রয়োজন!",
      name: "নাম প্রয়োজন!",
      phone: "ফোন প্রয়োজন!",
    }
  
  }
  
  const home = {
    home: "হোম",
    todayRevenue: "আজকের রাজস্ব",
    monthRevenue: "মাসের আয়",
    todaySales: "আজকের বিক্রয়",
    totalProduct: "মোট পণ্য",
    lowStockItems: "কম মজুদযুক্ত আইটেম",
    activeCustomers: "সক্রিয় গ্রাহকরা",
  
    create: "তৈরি করুন",
    create: {
      sale: "বিক্রয়",
  
      sale: {
        addSale: "বিক্রয় যোগ করুন",
        cash: "নগদ",
        credit: "ক্রেডিট",
        creditOn: {
          balance: "বকেয়া বকেয়া:{}",
          warning: "গ্রাহকের বিস্তারিত তথ্য প্রয়োজন",
        },
        invoice: "ইনভয়েস নম্বর.",
        date: "তারিখ",
        customer: "গ্রাহক",
        edit: "সম্পাদনা",
  
        editDetails: {
          customerDetails: "গ্রাহকের বিবরণ",
          name: "গ্রাহকের নাম",
          phone: "ফোন",
          email: "ইমেইল",
          DOB: "জন্ম তারিখ",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
          required: {
            name: "প্রয়োজনীয় ক্ষেত্র!",
            phone: "প্রয়োজনীয় ক্ষেত্র!"
          },
        },
  
        addItems: "আইটেম যোগ করুন",
        add_Items: {
          addItemSale: "বিক্রয়ের জন্য আইটেম যোগ করুন",
          name: "আইটেমের নাম *",
  
          itemName: {
            enter: "পণ্যের নাম বা পণ্য কোড লিখুন",
          },
          quantity: "পরিমাণ *",
  
          rate: "হার (মূল্য/ইউনিট) *",
          tax: {
            withouttax: "কর ছাড়া",
            withtax: "কর সহ"
          },
  
          description: "বিবরণ",
          saveNew: "সংরক্ষণ করুন এবং নতুন করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            itemName: "আইটেমের নাম প্রয়োজন!!",
            quantity: "পরিমাণ প্রয়োজন!!",
            rate: "রেট প্রয়োজন!!"
          },
        },
  
        othercharge: "অন্যান্য চার্জ",
        newcharge: "নতুন চার্জ যোগ করুন",
        addnewcharge: {
          chargeDetails: "চার্জের বিবরণ",
          name: "নাম *",
          amount: "পরিমাণ *",
          gst: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
          },
  
          description: "বিবরণ",
          code: "এইচএসএন কোড",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            name: "প্রয়োজন!",
            amount: "প্রয়োজন!",
          },
  
        },
  
        shippingCharge: "শিপিং চার্জ",
        shippingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        packagingCharge: "প্যাকেজিং চার্জ",
        packagingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        total: "মোট পরিমাণ: {}",
        payment: "পেমেন্ট পেড",
        add: {
          paymentType: "পেমেন্টের ধরণ যোগ করুন",
          select: "পেমেন্ট মোড নির্বাচন করুন",
          paymentMode: "পেমেন্ট মোড",
          modes: {
            selectMode: "মোড নির্বাচন করুন",
            upi: "ইউপিআই"
          },
  
          selectAccount: "অ্যাকাউন্ট নির্বাচন করুন",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
        },
  
        cash: "নগদ {}",
        totalPayment: "মোট পেমেন্ট {}",
        orderNo: "ক্রেতার অর্ডার নম্বর",
        dispatched: "মাধ্যমে পাঠানো হয়েছে",
        delivery: "ডেলিভারি নোট",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
        warning: "আইটেম যোগ করা হয়নি",
      },
  
      purchase: {
        createPurchase: "ক্রয় তৈরি করুন",
        cash: "নগদ",
        credit: "ক্রেডিট",
        creditOn: {
          balance: "বকেয়া বকেয়া: {}",
          warning: "গ্রাহকের বিবরণ প্রয়োজন",
        },
        invoice: "ইনভয়েস নম্বর.",
        date: "তারিখ",
        supplier: "সরবরাহকারী",
        edit: "সম্পাদনা",
  
        editDetails: {
          supplierDetails: "সরবরাহকারীর বিবরণ",
          name: "সরবরাহকারীর নাম",
          phone: "ফোন",
          email: "ইমেইল",
          DOB: "জন্ম তারিখ",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
          required: {
            name: "প্রয়োজনীয় ক্ষেত্র!",
            phone: "প্রয়োজনীয় ক্ষেত্র!",
          },
        },
  
        addItems: "আইটেম যোগ করুন",
        add_Items: {
          addItemSale: "কিনতে আইটেম যোগ করুন",
          name: "আইটেমের নাম *",
  
          itemName: {
            enter: "পণ্যের নাম বা পণ্য কোড লিখুন",
          },
          quantity: "পরিমাণ *",
  
          rate: "হার (মূল্য/ইউনিট) *",
          tax: {
            withouttax: "কর ছাড়া",
            withtax: "কর সহ"
          },
  
          description: "বিবরণ",
          saveNew: "সংরক্ষণ করুন এবং নতুন করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            itemName: "আইটেমের নাম প্রয়োজন!!",
            quantity: "পরিমাণ প্রয়োজন!!",
            rate: "রেট প্রয়োজন!!"
          },
        },
  
        othercharge: "অন্যান্য চার্জ",
        newcharge: "নতুন চার্জ যোগ করুন",
        addnewcharge: {
          chargeDetails: "চার্জের বিবরণ",
          name: "নাম *",
          amount: "পরিমাণ *",
          gst: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
          },
  
          description: "বিবরণ",
          code: "এইচএসএন কোড",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            name: "প্রয়োজন!",
            amount:"প্রয়োজন!",
          },
  
        },
  
        shippingCharge: "শিপিং চার্জ",
        shippingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        packagingCharge: "প্যাকেজিং চার্জ",
        packagingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        total: "মোট পরিমাণ: {}",
        payment: "পেমেন্ট পেড",
        add: {
          paymentType: "পেমেন্টের ধরণ যোগ করুন",
          select: "পেমেন্ট মোড নির্বাচন করুন",
          paymentMode: "পেমেন্ট মোড",
          modes: {
            selectMode: "মোড নির্বাচন করুন",
            upi: "ইউপিআই"
          },
  
          selectAccount: "অ্যাকাউন্ট নির্বাচন করুন",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
        },
  
        cash: "নগদ {}",
        totalPayment: "মোট পেমেন্ট {}",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
      },
  
      quotation: {
        createProforma: "প্রোফর্মা তৈরি করুন",
        quotation: "উদ্ধৃতি নং.",
        date: "তারিখ",
        customer: "গ্রাহক",
        edit: "সম্পাদনা",
  
        editDetails: {
          customerDetails: "গ্রাহকের বিবরণ",
          name: "গ্রাহকের নাম",
          phone: "ফোন",
          email: "ইমেইল",
          DOB: "জন্ম তারিখ",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
          required: {
            name: "প্রয়োজনীয় ক্ষেত্র!",
            phone: "প্রয়োজনীয় ক্ষেত্র!"
          },
        },
  
        addItems: "আইটেম যোগ করুন",
        add_Items: {
          addItemSale: "কিনতে আইটেম যোগ করুন",
          name: "আইটেমের নাম *",
  
          itemName: {
            enter: "পণ্যের নাম বা পণ্য কোড লিখুন",
          },
          quantity: "পরিমাণ *",
  
          rate: "হার (মূল্য/ইউনিট) *",
          tax: {
            withouttax: "কর ছাড়া",
            withtax: "কর সহ"
          },
  
          description: "বিবরণ",
          saveNew: "সংরক্ষণ করুন এবং নতুন করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            itemName: "আইটেমের নাম প্রয়োজন!!",
            quantity: "পরিমাণ প্রয়োজন!!",
            rate: "রেট প্রয়োজন!!"
          },
        },
        othercharge: "অন্যান্য চার্জ",
        newcharge: "নতুন চার্জ যোগ করুন",
        addnewcharge: {
          chargeDetails: "চার্জের বিবরণ",
          name: "নাম *",
          amount: "পরিমাণ *",
          gst: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
          },
  
          description: "বিবরণ",
          code: "এইচএসএন কোড",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
  
          required: {
            name: "প্রয়োজন!",
            amount: "প্রয়োজন!",
          },
  
        },
  
        shippingCharge: "শিপিং চার্জ",
        shippingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        packagingCharge: "প্যাকেজিং চার্জ",
        packagingGST: {
            default: "জিএসটি @ 0.0%",
            gstRate: "জিএসটি হার",
            gst25: "জিএসটি @ 0.25%",
            gst3:  "জিএসটি @ 3.0%",
            gst5:  "জিএসটি @ 5.0%",
            gst12: "জিএসটি @ 12.0%",
            gst18: "জিএসটি @ 18.0%",
            gst28: "জিএসটি @ 28.0%",
        },
  
        total: "মোট পরিমাণ:{}",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
      },
  
      payments: {
        createPayment: "পেমেন্ট তৈরি করুন",
        in: "ভিতরে",
        out: "আউট",
        out: {
          payment: "পেমেন্ট পেড:{}",
          warning: "কিছু পরিমাণ থাকা উচিত",
        },
        invoice: "ইনভয়েস নম্বর.",
        date: "তারিখ",
        partyName: "দলের নাম",
        phone: "ফোন",
        cash: "নগদ {}",
        totalPayment: "মোট পেমেন্ট {}",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
      },
  
  
      quickInvoice: {
        quickInvoice: "দ্রুত চালান",
        itemName: "আইটেমের নাম",
        rate: "হার",
        qty: "পরিমাণ",
        total: "মোট",
        productPrice: "পণ্যের দাম",
        totalAmount: "মোট পরিমাণ {}",
        next: "পরবর্তী"
  
      },
  
      catalogue: {
        catalogues: "ক্যাটালগ",
        createCatalogue: "ক্যাটালগ তৈরি করুন",
  
        createCatalogue: {
          selectCatalogue: "ক্যাটালগ নির্বাচন করুন",
          type: "আদর্শ",
          productTheme: "পণ্য থিম",
        },
        empty: "মনে হচ্ছে আপনার কাছে কোনও ক্যাটালগ নেই। একটি তৈরি করুন",
  
      },
  
      expense: {
        expenses: "খরচ",
        addExpense: "খরচ যোগ করুন",
        invoice: "ইনভয়েস নম্বর.",
        date: "তারিখ",
        expenseCategory: "ব্যয় বিভাগ",
        amount: "পরিমাণ *",
        expenseDescription: "ব্যয়ের বিবরণ *",
        attachment: "সংযুক্তি",
        attach: {
          chooseImage: "ছবি বেছে নিন",
          gallery: "গ্যালারি খুলুন",
          camera: "ক্যামেরা খুলুন",
        },
        payment: "পেমেন্ট পেড",
        //add from common
        required: {
          expenseCategory: "বিভাগটি আবশ্যক",
          amount: "পরিমাণ প্রয়োজন",
          description: "বিবরণ প্রয়োজন",
        },
      },
  
  
  
  
  
  
    },
  
    quickAccess: "দ্রুত প্রবেশাধিকার",
    quick_Access: {
  
      staffAttendance: "কর্মীদের উপস্থিতি",
      attendance: {
  
        mark: "উপস্থিতি চিহ্নিত করুন",
        enter: "নাম, ফোন অথবা ইমেল লিখুন",
        totalStaff: "মোট কর্মী",
        present: "Present",
        absent: "অনুপস্থিত",
        holiday: "ছুটির দিন",
        notMarked: "চিহ্নিত নয়",
        addOvertime: "ওভারটাইম যোগ করুন",
        overtime: {
          hourlyWage: "ঘণ্টায় মজুরি {}",
         hour: "ঘন্টা (গুলি)",
      minute: "মিনিট (গুলি)"
        },
  
        lateFine: "লেট ফাইন",
        fine: {
          //add from common
          addLateFine: "লেট ফাইন যোগ করুন",
        },
  
        paidHoliday: "বেতনভুক্ত ছুটি",
        halfDay: "অর্ধ দিবস",
        reset: "রিসেট",
        //save
      },
  
      connectPrinter: "প্রিন্টার সংযুক্ত করুন",
      printer: {
        addPrinter: "প্রিন্টার যোগ করুন",
        devices: "কোনও জোড়া ডিভাইস পাওয়া যায়নি",
        scanPrinter: "প্রিন্টার স্ক্যান করুন",
      },
  
      invoiceSettings: "ইনভয়েস সেটিংস",
      invoice: {
        invoicePrintSettings: "ইনভয়েস প্রিন্ট সেটিংস",
        regular: "নিয়মিত",
        regularOn: {
  
          printDefault: "নিয়মিত প্রিন্টারকে ডিফল্ট করুন",
          printCompanyInfo: "কোম্পানির তথ্য/শিরোনাম মুদ্রণ করুন",
          printCompany: {
  
          companyName: "কোম্পানির নাম প্রিন্ট করুন",
        logo: "কোম্পানির লোগো",
        address: "জানুন",
          },
  
          totalsAndTaxes: "মোট এবং কর",
          totals_Taxes: {
      
            itemQuantity: "মোট আইটেমের পরিমাণ",
            amountWithDecimal: "দশমিক সহ পরিমাণ (যেমন.0.00)",
            receivedAmount: "প্রাপ্ত পরিমাণ",
            balanceAmount: "ব্যালেন্সের পরিমাণ",
          },
      
          footer: "পাদলেখ",
          footerOn: {
      
            description: "মুদ্রণ বিবরণ",
            termsAndConditions: "শর্তাবলী",
          },
        },
  
        thermal: "তাপীয়",
        printDefault: "থার্মাল প্রিন্টারকে ডিফল্ট করুন",
        thermalOn: {
          printerSettings: "প্রিন্টার সেটিংস",
      
          printer_Settings: {
      
            default: "ডিফল্ট প্রিন্টার",
            selectPrinter: "প্রিন্টার নির্বাচন করুন",
          },
      
          theme: "থিম",
          themes: {
            companyName: "কোম্পানির নাম আকার",
          },
      
      
          printDefault: "থার্মাল প্রিন্টারকে ডিফল্ট করুন",
          printCompanyInfo: "কোম্পানির তথ্য/শিরোনাম মুদ্রণ করুন",
          printCompany: {
      
            companyName: "কোম্পানির নাম প্রিন্ট করুন",
            logo: "কোম্পানির লোগো",
            address: "জানুন",
          },
      
          totalsAndTaxes: "মোট এবং কর",
          totals_Taxes: {
      
            itemQuantity: "মোট আইটেমের পরিমাণ",
            amountWithDecimal: "দশমিক সহ পরিমাণ (যেমন.0.00)",
            receivedAmount: "প্রাপ্ত পরিমাণ",
            balanceAmount: "ব্যালেন্সের পরিমাণ",
          },
      
          footer: "পাদলেখ",
          footerOn: {
      
            description: "মুদ্রণ বিবরণ",
            termsAndConditions: "শর্তাবলী",
      
          },
  
  
        },
  
      },
  
      printPriceLabel: "মূল্য লেবেল প্রিন্ট করুন",
  
      priceLabel: {
        printLabels: "লেবেল প্রিন্ট করুন",
        required: "অনুগ্রহ করে সমস্ত প্রয়োজনীয় মান লিখুন।",
        labelDetails: "লেবেলের বিবরণ",
        details: {
  
          productName: "পণ্যের নাম",
          productPrice: "পণ্যের দাম",
          discountedPrice: "ছাড়যুক্ত মূল্য",
          barcode: "বারকোড",
          assigncode: "কোড বরাদ্দ করুন",
          quantity: "পরিমাণ",
          printSize: "মুদ্রণের আকার",
  
        },
      },
    },
  
    salesTrend: "বিক্রয় প্রবণতা",
  
  }
  
  const products = {
    products: "পণ্য",
    addProducts: "পণ্য যোগ করুন",
    manageProducts: "পণ্য পরিচালনা করুন",
  
    addProducts: {
      productInfo: "পণ্যের তথ্য",
      selectUnit: "ইউনিট নির্বাচন করুন",
  
      selectUnit: {
        primaryUnit: "প্রাথমিক ইউনিট",
        secondaryUnit: "মাধ্যমিক ইউনিট",
  
        primaryUnit: {
          search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
          piece: "টুকরা (পিসি)",
          dozen: "ডজন (ডিজেড)",
          milligrams: "মিলিগ্রাম (মিলিগ্রাম)",
          cartons: "কার্টন (সিটিএন)",
          kilograms: "কিলোগ্রাম (কেজি)",
          cubicMeter: "ঘনমিটার (মি³)",
          ton: "টন (টি)",
          mililitre: "মিলিলিটার (মিলি)",
          litre: "লিটার(লিটার)",
          grams: "গ্রাম (ছ)",
          packet: "প্যাকেট (পকেট)",
        },
  
        secondaryUnit: {
          search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
          piece: "টুকরা (পিসি)",
          dozen: "ডজন (ডিজেড)",
          milligrams: "মিলিগ্রাম (মিলিগ্রাম)",
          cartons: "কার্টন (সিটিএন)",
          kilograms: "কিলোগ্রাম (কেজি)",
          cubicMeter: "ঘনমিটার (মি³)",
          ton: "টন (টি)",
          mililitre: "মিলিলিটার (মিলি)",
          litre: "লিটার(লিটার)",
          grams: "গ্রাম (ছ)",
          packet: "প্যাকেট (পকেট)",
        },
        reset: "রিসেট",
        save: "সংরক্ষণ করুন",
  
  
      },
      code: "পণ্য কোড",
      description: "পণ্যের বর্ণনা",
      type: "আদর্শ",
  
      type: {
        product: "পণ্য",
        service: "সেবা",
  
        product: {
          stockQuantity: "স্টকের পরিমাণ",
          minStockQuantity: "ন্যূনতম স্টক পরিমাণ",
        },
      },
      hasVariant: "এর ভেরিয়েন্ট আছে",
  
      hasVarient: {
        yes: "হাঁ",
        no: "না",
      },
      inventaryDetail: "ইনভেন্টরির বিবরণ",
  
      inventory: {
        productPrice: "পণ্যের দাম",
        productPrice: {
          withTax: "কর সহ",
          withoutTax: "কর ছাড়া",
        },
        discountPercentage: "ছাড়ের শতাংশ",
        barcode: "বারকোড",
        assignCode: "কোড বরাদ্দ করুন",
        productImage: "পণ্যের ছবি",
        category: "বিভাগ",
        gst: "জিএসটি",
        gst: {
          hsnSac: "এইচএসএন/এসএসি",
          gstRate: "জিএসটি হার",
        },
        inventory: "ইনভেন্টরি",
  
        inventory: {
          instock: "ইনস্টক",
          outstock: "আউটস্টক",
        },
        reset: "রিসেট",
        warning: "পণ্যের নাম প্রয়োজন",
        warning: "বিভাগটি আবশ্যক",
      },
  
      manageProducts: {
        products: "পণ্য",
        add: "নতুন আইটেম যোগ করুন",
        warning: "মনে হচ্ছে আপনার কাছে কোনও আইটেম নেই। একটি তৈরি করুন।"
      },
  
  
  
  
  
  
    },
  
  }
  
  const sale = {
  
    sale: "বিক্রয়",
    sale: {
  
      createSale: "বিক্রয় তৈরি করুন",
      //sale
      quickInvoice: "দ্রুত চালান",
      //quickInvoice
      saleReturn: "বিক্রয় রিটার্ন",
      sale_Return: {
        saleReturn: "বিক্রয় রিটার্ন",
        invoiceNo: "ইনভয়েস নম্বর.",
        date: "তারিখ",
        customer: "গ্রাহক",
        edit: "সম্পাদনা",
  
        editDetails: {
          customerDetails: "গ্রাহকের বিবরণ",
          name: "গ্রাহকের নাম",
          phone: "ফোন",
          email: "ইমেইল",
          DOB: "জন্ম তারিখ",
          cancel: "বাতিল করুন",
          save: "সংরক্ষণ করুন",
          required: {
            name: "প্রয়োজনীয় ক্ষেত্র!",
            phone: "প্রয়োজনীয় ক্ষেত্র!"
          },
        },
        invoiceDate: "চালানের তারিখ",
        invoiceNumber: "ইনভয়েস নম্বর",
        deductions: "কর্তন",
        newcharge: "নতুন চার্জ যোগ করুন",
        //addnewcharge 
        shippingCharge: "শিপিং চার্জ",
        //shippingGST
        balance: "বকেয়া বকেয়া:{}",
        totalAmount: "Total Amount {}",
        //cancel & save
        warning: "গ্রাহকের বিবরণ প্রয়োজন",
      },
  
      createQuotation: "উদ্ধৃতি তৈরি করুন",
      create_Quotation: {
        createProforma: "প্রোফর্মা তৈরি করুন",
        //quotation
      },
    },
  }
  
  const purchase = {
    purchase: "ক্রয়",
    createPurchase: "ক্রয় তৈরি করুন",
    //purchase  
  
  }
  
  const staff = {
    addstaff: "কর্মী যোগ করুন",
    add_staff: {
  
      newstaff: "নতুন কর্মী",
      personalDetails: " ব্যক্তিগত বিবরণ",
      p_Details: {
        name: "নাম *",
        email: "ইমেইল *",
        phone: "ফোন *",
        role: "ভূমিকা *",
      },
      salaryDetails: "বেতনের বিবরণ",
      s_Details: {
        working: "প্রতিদিন কর্মঘণ্টা",
        rate: "প্রতি ঘণ্টার হার",
      },
      //cancel & save
      required: {
        name:  "প্রয়োজনীয় মূল্য!",
        email: "প্রয়োজনীয় মূল্য!",
        phone: "প্রয়োজনীয় মূল্য!",
      },
    },
  
    manageStaff: "কর্মীদের পরিচালনা করুন",
  
    manage_Staff: {
      staff: "কর্মী",
      staffDetail: {
  
        staffDetails: "কর্মীদের বিবরণ",
        name: "গ্রাহকের নাম",
        phone: "ফোন",
        email: "ইমেইল",
        balance: "ভারসাম্য{}",
        dob: "জন্ম তারিখ",
        workingHrs: "কর্মঘণ্টা",
        hourlyRate: "প্রতি ঘণ্টার হার",
        createdAt: "তৈরি করা হয়েছে",
        editStaff: "কর্মী সম্পাদনা করুন",
        //Add staff
  
      },
  
      addNewStaff: "নতুন কর্মী যোগ করুন",
  
    },
  
    payroll: "বেতন",
    staffPayment: {
      staffPayments: "কর্মীদের অর্থপ্রদান",
      enter: "নাম, ফোন অথবা ইমেল লিখুন",
      balance: "ভারসাম্য",
      totalEarning: "মোট আয়",
      payments: "পেমেন্ট",
      wageSummary: "মজুরির সারসংক্ষেপ",
      payments: "পেমেন্ট",
      paymentOn: {
        addNewPayment: "নতুন পেমেন্ট যোগ করুন",
        addPayment: {
          createPayment: "পেমেন্ট তৈরি করুন",
          staffDetails: "কর্মীদের বিবরণ",
          name: "নাম",
          email: "ইমেইল",
          paymentDetails: "পেমেন্টের বিবরণ",
          amount: "পরিমাণ *",
          paymentType: "পেমেন্টের ধরণ *",
          P_Type: {
            advance: "অগ্রিম",
            salary: "বেতন",
            other: "অন্যান্য",
          },
          date: "তারিখ *",
          description: "বিবরণ",
          //cancel & save
  
        },
      },
      required: {
        default: "কোন কর্মী নির্বাচন করা হয়নি!",
        notexist: "কোন ফলাফল পাওয়া যায়নি!",
        wageSummary: "কোন সারাংশ পাওয়া যায়নি!",
        payments: "কোন পেমেন্ট পাওয়া যায়নি!",
        amount: "ক্ষেত্র প্রয়োজন!",
        paymentType: "ক্ষেত্র প্রয়োজন!",
      },
  
    },
  
    attendance: "উপস্থিতি",
    //mark attendance
  
  }
  
  const printLabel = {
  
    printLabel: "লেবেল প্রিন্ট করুন",
    //printPriceLable
  }
  
  const invoiceSettings = {
  
    invoiceSettings: "ইনভয়েস সেটিংস",
    //invoice print settings
  }
  
  const invoices = {
  
    invoices: "চালান",
    saleinvoices: "বিক্রয় চালান",
    addnewsale: "নতুন বিক্রয় যোগ করুন",
    //add sale
  
  
    proformaQuotations: "প্রোফর্মা উদ্ধৃতি",
    createProforma: "প্রোফর্মা তৈরি করুন",
    //quotation
  
    purchase: "ক্রয়",
    addNewPurchase: "নতুন ক্রয় যোগ করুন",
    //create purchase
  
  
    required: {
      saleItem: "মনে হচ্ছে আপনার কাছে কোনও বিক্রয় আইটেম নেই। একটি তৈরি করুন।",
      proforma: "মনে হচ্ছে আপনার কাছে কোনও প্রোফর্মা নেই। একটি তৈরি করুন।",
      purchase: "মনে হচ্ছে আপনার কোনও ক্রয় নেই। একটি তৈরি করুন।",
  
    },
  }
  
  const product = {
  
    products: "পণ্য",
    search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
    addNewItem: "নতুন আইটেম যোগ করুন",
    //add product
  }
  
  const party = {
  
    parties: "দলগুলি",
    customer: "গ্রাহক",
    cleared: "সাফ করা হয়েছে",
    addNewCustomer: "নতুন গ্রাহক যোগ করুন",
    addParty: {
      addParty: "পার্টি যোগ করুন",
      personalDetails: "ব্যক্তিগত বিবরণ",
      p_Details: {
        name: "ক্রেতার নাম *",
        phone: "ফোন *",
        email: "ইমেইল *",
        dob: "জন্ম তারিখ",
      },
  
      addressDetails: "ঠিকানার বিবরণ",
      address_Details: {
  
        address: "জানুন",
        landMark: "রাস্তা, ল্যান্ডমার্ক",
        postalCode: "পোস্টাল কোড",
        city: "শহর",
        state: "রাজ্য",
        country: "দেশ",
        select_Country: {
  
          selectCountry: "দেশ নির্বাচন করুন",
          search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
          //country name 
  
        },
        //cancel & save
  
      },
    },
    supplier: "সরবরাহকারী",
    addNewSupplier: "নতুন সরবরাহকারী যোগ করুন",
    addParty: {
      addParty: "পার্টি যোগ করুন",
      personalDetails: "ব্যক্তিগত বিবরণ",
      p_Details: {
        name: "ক্রেতার নাম *",
        phone: "ফোন *",
        email: "ইমেইল *",
        dob: "জন্ম তারিখ",
      },
  
      addressDetails: "ঠিকানার বিবরণ",
      address_Details: {
  
        address: "জানুন",
        landMark: "রাস্তা, ল্যান্ডমার্ক",
        postalCode: "পোস্টাল কোড",
        city: "শহর",
        state: "রাজ্য",
        country: "দেশ",
        select_Country: {
  
          selectCountry: "দেশ নির্বাচন করুন",
          search: "কীওয়ার্ড অনুসারে অনুসন্ধান করুন",
          //country name 
  
        },
        //cancel & save
  
      },
  
    },
  
  
    required: {
      supplier: "মনে হচ্ছে তোমার কোন সরবরাহকারী নেই। একটি তৈরি করো।",
      customer: "মনে হচ্ছে তোমার কোন গ্রাহক নেই। একটি তৈরি করো।",
      addParty: {
        Name: "প্রয়োজনীয় ক্ষেত্র!",
        phone: "প্রয়োজনীয় ক্ষেত্র!",
        phoneEnter: "একটি বৈধ ফোন নম্বর লিখুন!",
        email: "একটি বৈধ ইমেল ঠিকানা লিখুন!",
      },
    },
  
  }
  
  const accounts = {
    accounts: "হিসাব",
    moneyAccounts: "মানি অ্যাকাউন্ট",
    currentDeposits: "বর্তমান আমানত",
    dueAmounts: "বকেয়া পরিমাণ",
    todaysDebits: "আজকের ঋণ",
    todaysCredits: "আজকের কৃতিত্ব",
    account: "হিসাব",
    select_account: {
      select: "নির্বাচন করুন",
      selectAccount: "অ্যাকাউন্ট নির্বাচন করুন",
      newAccount: "নতুন অ্যাকাউন্ট",
      addNewAccount: {
  
        createPaymentMode: "পেমেন্ট মোড তৈরি করুন",
        accountDetails: "অ্যাকাউন্টের বিবরণ",
        accountName: "অ্যাকাউন্টের নাম *",
        openingBalance: "ওপেনিং ব্যালেন্স",
        paymentType: "পেমেন্টের ধরণ",
        type: {
          cash: "নগদ",
          online: "অনলাইন",
          onlineOn: {
            paymentModes: "পেমেন্ট মোড",
            paymentMode: {
              upi: "ইউপিআই",
              cheque: "চেক",
              neft: "এনইএফটি",
              rtgs: "আরটিজিএস",
              netBanking: "নেট ব্যাংকিং",
              creditCard: "ক্রেডিট কার্ড",
              debitCard: "ডেবিট কার্ড",
  
            },
            upi: "ইউপিআই",
            upiOn: {
              upiId: "ইউপিআই আইডি *"
            },
            bankAccountDetail: "ব্যাংক অ্যাকাউন্টের বিবরণ",
            accountDetail: {
              accountHolderName: "অ্যাকাউন্টধারীর নাম",
              bankName: "ব্যাংকের নাম",
              accountNumber: "অ্যাকাউন্ট নম্বর *",
              ifscCode: "আইএফএসসি কোড *",
              saving: "সঞ্চয়",
              accountType: "অ্যাকাউন্টের ধরণ",
              type: {
                current: "বর্তমান",
                saving: "সঞ্চয়",
              },
            },
          },
        },
  
        //cancel & save
  
      },
    },
  
    transactions: "লেনদেন",
    default: "কোনও লেনদেন উপলব্ধ নেই",
    createTransaction: "লেনদেন তৈরি করুন",
    create_transaction:{
       newTransaction:"নতুন লেনদেন",
       transactionType:"লেনদেনের ধরণ",
       deposit:"জমা",
       withdrawal:"প্রত্যাহার",
       account:"হিসাব",
       select:"নির্বাচন করুন",
       selectAccount: "অ্যাকাউন্ট নির্বাচন করুন",
       newAccount: "নতুন অ্যাকাউন্ট",
       //addNewAccount
       transactionDetails:"লেনদেনের বিবরণ",
       amount:"পরিমাণ *",
       description:"বিবরণ *"
       //cancel & save
  
    },
    required:{
  
      amount:"ক্ষেত্র প্রয়োজন!",
      accountName:"ক্ষেত্র প্রয়োজন!",
      description:"ক্ষেত্র প্রয়োজন!",
    },
  
  }
  
  const center ={
    helpCenter:"সাহায্য কেন্দ্র",
  }
  
  const policy ={
    privacyPolicy:"গোপনীয়তা নীতি",
  }
  
  const Conditions ={
    termsAndConditions:"শর্তাবলী",
  }
  
  const logout ={
  
    logout:"লগআউট",
  }