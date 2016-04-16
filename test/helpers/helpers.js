
function helperSend(cborMsg, cb) {
	cb(null, cborMsg);
}

function helperReceive(cb) {
	var cborMsg = null;
	cb(null, cborMsg);
}

module.exports = {
	authCmd: {
		rpId: "paypal.com",
		clientDataHash: "5a81483d96b0bc15ad19af7f5a662e14b275729fbc05579b18513e7f550016b1",
		account: {
			rpDisplayName: "PayPal",
			displayName: "John P. Smith",
			name: "johnpsmith@gmail.com",
			id: "1098237235409872",
			imageUri: "https://pics.paypal.com/00/p/aBjjjpqPb.png"
		},
		cryptoParameters: [{
			type: "FIDO",
			algorithm: "ES256"
		}, {
			type: "FIDO",
			algorithm: "RS256"
		}]
	},
	helperAuth: {
		send: helperSend,
		receive: helperReceive
	},
authenticatorMakeCredentialCommandCbor: [
		0x01                                         , // authenticatorMakeCredential command
        0xa4                                         , // map(4)
           0x01                                      , // unsigned(1) -- rpId
           0x6a                                      , // text(10)
              0x70, 0x61, 0x79, 0x70, 0x61, 0x6c, 0x2e, 0x63, 0x6f, 0x6d,                 
              										   // "paypal.com"
           0x02                                      , // unsigned(2) -- clientDataHash
           0x58, 0x20                                , // byte string(32)
              0x5a, 0x81, 0x48, 0x3d, 0x96, 0xb0, 0xbc, 0x15, 0xad, 0x19, 0xaf, 0x7f, 0x5a, 0x66, 0x2e, 0x14, 0xb2, 0x75, 0x72, 0x9f, 0xbc, 0x05, 0x57, 0x9b, 0x18, 0x51, 0x3e, 0x7f, 0x55, 0x00, 0x16, 0xb1, 
              									       // sha256 hash
           0x03                                      , // unsigned(3) -- account
           0xa5                                      , // map(5)
              0x6d                                   , // text(13)
                 0x72, 0x70, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 
                 									   // "rpDisplayName"
              0x66                                   , // text(6)
                 0x50, 0x61, 0x79, 0x50, 0x61, 0x6c  , // "PayPal"
              0x6b                                   , // text(11)
                 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 
                 									   // "displayName"
              0x6d                                   , // text(13)
                 0x4a, 0x6f, 0x68, 0x6e, 0x20, 0x50, 0x2e, 0x20, 0x53, 0x6d, 0x69, 0x74, 0x68, 
                 									   // "John P. Smith"
              0x64                                   , // text(4)
                 0x6e, 0x61, 0x6d, 0x65              , // "name"
              0x74                                   , // text(20)
                 0x6a, 0x6f, 0x68, 0x6e, 0x70, 0x73, 0x6d, 0x69, 0x74, 0x68, 0x40, 0x67, 0x6d, 0x61, 0x69, 0x6c, 0x2e, 0x63, 0x6f, 0x6d, 
                 									   // "johnpsmith@gmail.com"
              0x62                                   , // text(2)
                 0x69, 0x64                          , // "id"
              0x70                                   , // text(16)
                 0x31, 0x30, 0x39, 0x38, 0x32, 0x33, 0x37, 0x32, 0x33, 0x35, 0x34, 0x30, 0x39, 0x38, 0x37, 0x32, 
                 									   // "1098237235409872"
              0x68                                   , // text(8)
                 0x69, 0x6d, 0x61, 0x67, 0x65, 0x55, 0x72, 0x69, 
                 									  // "imageUri"
              0x78, 0x2a                            , // text(42)
                 0x68, 0x74, 0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f, 0x70, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x61, 0x79, 0x70, 0x61, 0x6c, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x30, 0x30, 0x2f, 0x70, 0x2f, 0x61, 0x42, 0x6a, 0x6a, 0x6a, 0x70, 0x71, 0x50, 0x62, 0x2e, 0x70, 0x6e, 0x67, 
                 									  // "https://pics.paypal.com/00/p/aBjjjpqPb.png"
           0x04                                      , // unsigned(4) -- cryptoParameters
           0x82                                      , // array(2)
              0xa2                                   , // map(2)
                 0x64                                , // text(4)
                    0x74, 0x79, 0x70, 0x65           , // "type"
                 0x64                                , // text(4)
                    0x46, 0x49, 0x44, 0x4f           , // "FIDO"
                 0x69                                , // text(9)
                    0x61, 0x6c, 0x67, 0x6f, 0x72, 0x69, 0x74, 0x68, 0x6d, 
                    							       // "algorithm"
                 0x65                                , // text(5)
                    0x45, 0x53, 0x32, 0x35, 0x36     , // "ES256"
              0xa2                                   , // map(2)
                0x64                                 , // text(4)
                    0x74, 0x79, 0x70, 0x65           , // "type"
                 0x64                                , // text(4)
                    0x46, 0x49, 0x44, 0x4f           , // "FIDO"
                 0x69                                , // text(9)
                    0x61, 0x6c, 0x67, 0x6f, 0x72, 0x69, 0x74, 0x68, 0x6d, 
                    								   // "algorithm"
                 0x65                                , // text(5)
                    0x52, 0x53, 0x32, 0x35, 0x36       // "RS256"
],

derEccPublicKey: [
0x30, 0x82, 0x01, 0x4B, 												// sequence(2)
	0x30, 0x82, 0x01, 0x03, 											// sequence(2)
		0x06, 0x07, 0x2A, 0x86, 0x48, 0xCE, 0x3D, 0x02, 0x01,  			// OID 1.2.840.10045.2.1 = EC Public Key
		0x30, 0x81, 0xF7, 												// sequence(6)
			0x02, 0x01, 0x01, 											// integer 1
			0x30, 0x2C, 												// sequence(2)
				0x06, 0x07, 0x2A, 0x86, 0x48, 0xCE, 0x3D, 0x01, 0x01,   // OID 1.2.840.10045.1.1 = id-prime-Field
				0x02, 0x21, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 		// integer(256 bit) = prime
				0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 		// ...
				0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 		// ...
				0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 		// ...
				0xFF, 0xFF, 0xFF, 										// ...
			0x30, 0x5B, 												// sequence(3)
				0x04, 0x20, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00,			// octet string(32 byte) = a
				0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 		// ...
				0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 		// ...
				0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 		// ...
				0xFF, 0xFC, 											// ...
				0x04, 0x20, 0x5A, 0xC6, 0x35, 0xD8, 0xAA, 0x3A, 		// octet string(32 byte) = b
				0x93, 0xE7, 0xB3, 0xEB, 0xBD, 0x55, 0x76, 0x98, 		// ...
				0x86, 0xBC, 0x65, 0x1D, 0x06, 0xB0, 0xCC, 0x53, 		// ...
				0xB0, 0xF6, 0x3B, 0xCE, 0x3C, 0x3E, 0x27, 0xD2, 		// ...
				0x60, 0x4B, 											// ...
				0x03, 0x15, 0x00, 0xC4, 0x9D, 0x36, 0x08, 0x86, 		// bit string(160 bit) = seed
				0xE7, 0x04, 0x93, 0x6A, 0x66, 0x78, 0xE1, 0x13, 		// ...
				0x9D, 0x26, 0xB7, 0x81, 0x9F, 0x7E, 0x90, 				// ...
			0x04, 0x41, 0x04, 0x6B, 0x17, 0xD1, 0xF2, 0xE1, 			// octet string(65 byte) = generator
			0x2C, 0x42, 0x47, 0xF8, 0xBC, 0xE6, 0xE5, 0x63, 			// ...
			0xA4, 0x40, 0xF2, 0x77, 0x03, 0x7D, 0x81, 0x2D, 			// ...
			0xEB, 0x33, 0xA0, 0xF4, 0xA1, 0x39, 0x45, 0xD8, 			// ...
			0x98, 0xC2, 0x96, 0x4F, 0xE3, 0x42, 0xE2, 0xFE, 			// ...
			0x1A, 0x7F, 0x9B, 0x8E, 0xE7, 0xEB, 0x4A, 0x7C, 			// ...
			0x0F, 0x9E, 0x16, 0x2B, 0xCE, 0x33, 0x57, 0x6B, 			// ...
			0x31, 0x5E, 0xCE, 0xCB, 0xB6, 0x40, 0x68, 0x37, 			// ...
			0xBF, 0x51, 0xF5, 											// ...
			0x02, 0x21, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 			// integer(256 bit) = order
			0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 			// ...
			0xFF, 0xFF, 0xFF, 0xBC, 0xE6, 0xFA, 0xAD, 0xA7, 			// ...
			0x17, 0x9E, 0x84, 0xF3, 0xB9, 0xCA, 0xC2, 0xFC, 			// ...
			0x63, 0x25, 0x51, 											// ...
			0x02, 0x01, 0x01, 											// integer 1
	0x03, 0x42, 0x00, 0x04, 0x87, 0x1B, 0xA7, 0xFE, 					// bit string(520 bit) = public key
	0x0B, 0xF3, 0x81, 0xC2, 0x3A, 0xE9, 0xE9, 0x6D, 					// ...
	0xFF, 0x5C, 0x55, 0x33, 0xA5, 0x04, 0x43, 0x37, 					// ...
	0x05, 0xE3, 0x7A, 0x79, 0x02, 0x12, 0x65, 0x16, 					// ...
	0x5F, 0x95, 0xD6, 0x0D, 0xBC, 0x67, 0xC7, 0x1E, 					// ...
	0xAB, 0x03, 0x01, 0xC6, 0x7D, 0x70, 0xF5, 0x4F, 					// ...
	0x13, 0xC9, 0xED, 0x80, 0xCE, 0x86, 0x73, 0x85, 					// ...
	0x16, 0xB8, 0x37, 0x81, 0x8D, 0x10, 0xCF, 0xA3, 					// ...
	0xCF, 0x07, 0x20, 0x93												// ...
]

};
