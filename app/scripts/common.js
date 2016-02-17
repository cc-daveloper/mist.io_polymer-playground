var NETWORK_FORM_FIELDS = [{
  name: "name",
  label: "Name *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  errorMessage: "Please enter network's name",
  show: true,
  required: true
}, {
  name: "cloud",
  label: "Cloud *",
  type: "dropdown",
  value: "",
  defaultValue: "",
  placeholder: "",
  errorMessage: "Please select a cloud",
  show: true,
  required: true,
  options: [{
    title: "Executable",
    val: "executable"
  }, {
    title: "Ansible Playbook",
    val: "ansible"
  }]
}, {
  name: "admin_state",
  label: "Admin State *",
  type: "dropdown",
  value: "up",
  defaultValue: "",
  placeholder: "",
  errorMessage: "Please select admin state",
  show: true,
  required: true,
  options: [{
    title: "Up",
    val: "up"
  }, {
    title: "Down",
    val: "down"
  }]
}, {
  name: "subnet",
  label: "Create Subnet *",
  type: "switch",
  value: false,
  defaultValue: false,
  placeholder: "",
  show: true,
  required: true
}, {
  name: "subnet_name",
  label: "Subnet Name *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "subnet",
    fieldValues: [true]
  },
  errorMessage: "Please enter a subnet name"
}, {
  name: "cidr",
  label: "Network Address (CIDR) *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "subnet_name",
    fieldExists: true
  },
  errorMessage: "Please enter a subnet name"
}, {
  name: "ip_version",
  label: "IP Version *",
  type: "dropdown",
  value: "ipv4",
  defaultValue: "ipv4",
  placeholder: "",
  show: false,
  required: true,
  options: [{
    title: "IPv4",
    val: "ipv4"
  }, {
    title: "IPv6",
    val: "ipv6"
  }],
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}, {
  name: "gateway_ip",
  label: "Gateway IP *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}, {
  name: "disable_gateway",
  label: "Disable Gateway *",
  type: "checkbox",
  value: false,
  defaultValue: false,
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}, {
  name: "enable_dhcp",
  label: "Enable DHCP *",
  type: "checkbox",
  value: false,
  defaultValue: false,
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}, {
  name: "create_router",
  label: "Create Router *",
  type: "checkbox",
  value: false,
  defaultValue: false,
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}, {
  name: "router_name",
  label: "Router Name *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "create_router",
    fieldValues: [true]
  }
}, {
  name: "public_gateway",
  label: "Set Public Gateway *",
  type: "checkbox",
  value: true,
  defaultValue: true,
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "create_router",
    fieldValues: [true]
  }
}, {
  name: "allocatios_polls",
  label: "Allocation Polls *",
  type: "textarea",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "cidr",
    fieldExists: true
  }
}];

var SCRIPT_FORM_FIELDS = [{
  name: "name",
  label: "Name *",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  errorMessage: "Please enter script's name",
  show: true,
  required: true
}, {
  name: "description",
  label: "Description",
  type: "textarea",
  value: "",
  defaultValue: "",
  placeholder: "",
  errorMessage: "Please enter script's description",
  show: true,
  required: false
}, {
  name: "type",
  label: "Type *",
  type: "dropdown",
  value: "",
  defaultValue: "",
  errorMessage: "Please enter script's description",
  show: true,
  required: true,
  options: [{
    title: "Executable",
    val: "executable"
  }, {
    title: "Ansible Playbook",
    val: "ansible"
  }]
}, {
  name: "source",
  label: "Source *",
  type: "dropdown",
  value: "",
  defaultValue: "",
  errorMessage: "Please enter script's source",
  show: true,
  required: true,
  options: [{
    title: "Github",
    val: "github"
  }, {
    title: "URL",
    val: "url"
  }, {
    title: "Inline",
    val: "inline"
  }]
}, {
  name: "url",
  label: "Url *",
  type: "text",
  value: "http://",
  defaultValue: "http://",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "source",
    fieldValues: ["url"]
  },
  errorMessage: "Please enter a url"
}, {
  name: "url",
  label: "Github Repo *",
  type: "text",
  value: "https://github.com/owner/repo",
  defaultValue: "https://github.com/owner/repo",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "source",
    fieldValues: ["github"]
  },
  errorMessage: "Please enter a github repo"
}, {
  name: "entryPoint",
  label: "Entry point",
  type: "text",
  value: "",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: false,
  showIf: {
    fieldName: "source",
    fieldValues: ["github", "url"]
  },
  errorMessage: "Please enter script"
}, {
  name: "script",
  label: "Script *",
  type: "textarea",
  value: "- name: Dummy ansible playbook\n\thosts: localhost\n\ttasks:\n\t\t- name: Dummy task\n\t\tdebug:\n\t\t\tmsg: 'Hello World'\n",
  defaultValue: "",
  placeholder: "",
  show: false,
  required: true,
  showIf: {
    fieldName: "source",
    fieldValues: ["inline"]
  },
  valueIf: {
    fieldName: "type",
    fieldOptions: {
      "executable": "#!/bin/bash\necho 'hello world'",
      "ansible": "- name: Dummy ansible playbook\n\thosts: localhost\n\ttasks:\n\t\t- name: Dummy task\n\t\tdebug:\n\t\t\tmsg: 'Hello World'\n"
    }
  }
}];

var TIME_MAP = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
  YEAR: 12 * 30 * 24 * 60 * 60 * 1000,
};

Date.prototype.getMonthName = function(short) {
  if (short) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ][this.getMonth()];
  }

  return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ][this.getMonth()];
}

Date.prototype.getTimeFromNow = function() {
  var now = new Date();
  var diff = now - this;
  var ret = '';

  if (diff < 10 * TIME_MAP.SECOND)
    ret = 'Now';

  else if (diff < TIME_MAP.MINUTE)
    ret = parseInt(diff / TIME_MAP.SECOND) + ' sec';

  else if (diff < TIME_MAP.HOUR)
    ret = parseInt(diff / TIME_MAP.MINUTE) + ' min';

  else if (diff < TIME_MAP.DAY)
    ret = parseInt(diff / TIME_MAP.HOUR) + ' hour';

  else if (diff < 2 * TIME_MAP.DAY)
    ret = 'Yesterday';

  else if (diff < TIME_MAP.YEAR)
    ret = this.getMonthName(true) + ' ' + this.getDate();

  if (ret.indexOf('sec') > -1 ||
    ret.indexOf('min') > -1 ||
    ret.indexOf('hour') > -1) {

    // Add 's' for plural
    if (ret.split(' ')[0] != '1')
      ret = ret + 's';

    ret = ret + ' ago';
  }

  return ret;
}

var COUNTRIES = ["Afghanistan", "Åland Islands", "Albania", "Algeria",
  "American Samoa", "Andorra", "Angola", "Anguilla",
  "Antarctica", "Antigua and Barbuda", "Argentina",
  "Armenia", "Aruba", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bermuda", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Bouvet Island",
  "Brazil", "British Indian Ocean Territory",
  "Brunei Darussalam", "Bulgaria", "Burkina Faso",
  "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Cayman Islands",
  "Central African Republic", "Chad", "Chile", "China",
  "Christmas Island", "Cocos (Keeling) Islands",
  "Colombia", "Comoros", "Congo",
  "Congo, The Democratic Republic of the",
  "Cook Islands", "Costa Rica", "Cote D'Ivoire",
  "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Ethiopia", "Falkland Islands (Malvinas)",
  "Faroe Islands", "Fiji", "Finland", "France",
  "French Guiana", "French Polynesia",
  "French Southern Territories", "Gabon", "Gambia",
  "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
  "Greenland", "Grenada", "Guadeloupe", "Guam",
  "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)", "Honduras",
  "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iran, Islamic Republic Of", "Iraq",
  "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
  "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Korea, Democratic People'S Republic of",
  "Korea, Republic of", "Kuwait", "Kyrgyzstan",
  "Lao People'S Democratic Republic", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Martinique", "Mauritania",
  "Mauritius", "Mayotte", "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of", "Monaco", "Mongolia",
  "Montserrat", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands",
  "Netherlands Antilles", "New Caledonia", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "Niue",
  "Norfolk Island", "Northern Mariana Islands", "Norway",
  "Oman", "Pakistan", "Palau",
  "Palestinian Territory, Occupied", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Pitcairn", "Poland", "Portugal", "Puerto Rico",
  "Qatar", "Reunion", "Romania", "Russian Federation",
  "RWANDA", "Saint Helena", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia and Montenegro", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Svalbard and Jan Mayen", "Swaziland", "Sweden",
  "Switzerland", "Syrian Arab Republic",
  "Taiwan, Province of China", "Tajikistan",
  "Tanzania, United Republic of", "Thailand",
  "Timor-Leste", "Togo", "Tokelau", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Turks and Caicos Islands", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States",
  "United States Minor Outlying Islands", "Uruguay",
  "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam",
  "Virgin Islands, British", "Virgin Islands, U.S.",
  "Wallis and Futuna", "Western Sahara", "Yemen",
  "Zambia", "Zimbabwe"
];
