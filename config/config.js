module.exports = {
	development: {
		db: 'mongodb://konsole:runner@ds031972.mongolab.com:31972/konsole-runner',
		app: {
			name: 'Konsole Runner - Authentication module'
		},
		facebook: {
			clientID: "{{PLACEHOLDER}}",
			clientSecret: "{{PLACEHOLDER}}",
			callbackURL: "{{PLACEHOLDER}}"
		},

		google: {
			clientID: "{{PLACEHOLDER}}",
			clientSecret: "{{PLACEHOLDER}}",
			callbackURL: "{{PLACEHOLDER}}"
		}
	},
  	production: {
    	db: 'mongodb://konsole:runner@ds031972.mongolab.com:31972/konsole-runner',
		app: {
			name: 'Konsole Runner - Authentication module'
		},
		facebook: {
			clientID: "",
			clientSecret: "",
			callbackURL: ""
		},
		google: {
			clientID: '',
			clientSecret: '',
			callbackURL: ''
		}
 	}
}
