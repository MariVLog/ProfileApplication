var AdminApplication = AdminApplication || {};
var AppRef;

AdminApplication.Application = function () {
    var self = this;

    self.MainPage = ko.observable(true);
    self.EditPage = ko.observable(false);

    //START PERSONAL INFORMATION SECTION
    self.fname = ko.observable("");
    self.mname = ko.observable("");
    self.lname = ko.observable("");
    self.gendertypes = ko.observableArray(['Male', 'Female', 'Not Sure']);
    self.chosengender = ko.observable("");
    self.ttle = ko.observable("");
    self.sa1 = ko.observable("");
    self.sa2 = ko.observable("");
    self.city = ko.observable("");
    self.prov = ko.observable("");
    self.country = ko.observable("");
    self.zip = ko.observable("");
    self.email = ko.observable("");
    self.Cphone = ko.observable("");
    self.wphone = ko.observable("");
    self.hphone = ko.observable("");
    self.wemail = ko.observable("");
    self.relshp = ko.observable("");
    self.rfname = ko.observable("");
    self.rlname = ko.observable("");
    self.remail = ko.observable("");
    self.rcell = ko.observable("");
    self.rphone = ko.observable("");
    self.dob = ko.observable("");
    self.idnum = ko.observable("");
    self.comp = ko.observableArray(['Company 1A', 'Company 1B', 'Company 1C', 'Company 1D']);
    self.chosencomp = ko.observable("");
    self.dept = ko.observableArray(['Department A', 'Department B', 'Department C', 'Department D']);
    self.chosendept = ko.observable("");
    self.job = ko.observableArray(['Assistant', 'Manager', 'CEO', 'Secretary', 'Lecturer']);
    self.chosenjob = ko.observable("");
    self.empid = ko.observable("");
    self.status = ko.observable("");
    self.tmc = ko.observableArray(['TMC A', 'TMC B', 'TMC C', 'TMC D']);
    self.chosentmc = ko.observable("");
    self.costc = ko.observableArray(['Cost Center A', 'Cost Center B', 'Cost Center C', 'Cost Center D']);
    self.chosencostc = ko.observable("");
    self.pgroup = ko.observableArray(['Policy Group A', 'Policy Group B', 'Policy Group C', 'Policy Group D']);
    self.chosenpgroup = ko.observable("");

    self.savepersonal = function () {

        var personalInfo = {
            FirstName: self.fname(),
            MiddleName: self.mname(),
            LastName: self.lname(),
            Gender: self.chosengender(),
            Title: self.ttle(),
            Address1: self.sa1(),
            Address2: self.sa2(),
            City: self.city(),
            Province: self.prov(),
            Country: self.country(),
            Zipcode: self.zip(),
            Email: self.email(),
            Cellphone: self.Cphone(),
            WorkTel: self.wphone(),
            HomeTel: self.hphone(),
            WorkEmail: self.wemail(),
            Relationship: self.relshp(),
            ConFirstName: self.rfname(),
            ConLastName: self.rlname(),
            ConEmail: self.remail(),
            ConCellphone: self.rcell(),
            AltTel: self.rphone(),
            DateOfBirth: self.dob(),
            IdNumber: self.idnum(),
            Company: self.chosencomp(),
            Department: self.chosendept(),
            JobTitle: self.chosenjob(),
            EmployeeId: self.empid(),
            Status: self.status(),
            TMC: self.chosentmc(),
            CostCenter: self.chosencostc(),
            PolicyGroup: self.chosenpgroup()
        };

        $.ajax({
            cache: false,
            url: "/Dash/SavePersonal",
            type: "POST",
            dataType: "Text",
            data: {
                PERSONAL: personalInfo
            },
            success: function (data) {
                var dta = JSON.parse(data);
            }

        });
    };

    //START MEMBERSHIPS AND LOYALTY PROGRAMS SECTION        
    self.lprog = ko.observableArray(['SAA Voyager', 'Ebucks', 'Virgin Money', 'Hilton Honors']);
    self.chosenprogram = ko.observable("");
    self.arln = ko.observable("");
    self.lnum = ko.observable("");
    self.edate = ko.observable("");
    self.carprog = ko.observableArray(['Ebucks', 'SAA Voyager', 'Virgin Money', 'Hilton Honors']);
    self.chosencarprog = ko.observable("");
    self.cven = ko.observable("");
    self.clnum = ko.observable("");
    self.edt = ko.observable("");
    //self.Aprog(['Hilton Honors', 'Ebucks', 'SAA Voyager', 'Virgin Money']);
    //self.chosenAprog = ko.observable("");
    self.htch = ko.observable("");
    self.Alnum = ko.observable("");
    self.enrolldt = ko.observable("");

    self.saveLoyalty = function () {

        //var loyalty = {
        //    AirProgram: self.chosenprogram(),
        //    Airline: self.arln(),
        //    LoyaltyNumber: self.lnum(),
        //    EnrollDate
        //}

        $.ajax({
            cache: false,
            url: "/Dash/SaveLoyalty",
            type: "POST",
            dataType: "Text",
            data: {
                PERSONAL: personalInfo
            },
            success: function (data) {
                var dta = JSON.parse(data);
            }

        });
    };

};

(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery