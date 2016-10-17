export default {
    baum: [
        {
            id: 'a7ade016-1e7b-4ccb-bd48-2e485111a870',
            type: 'bool',
            fragenText: 'Werden Sie durch einen vom Vormundschaftsgericht bestellten Betreuer vertreten oder wurde ein Antrag auf Betreuung gestellt?',
            antwort: null,
            moeglichkeiten: [
                {
                    text: 'Ja',
                    value: true,
                    unterfrage: {
                        id: '9338a255-5310-403d-91e3-934fc80c901a',
                        type: 'bool',
                        fragenText: 'Basiert die Betreuung auf Paragraph 47 Absatz 11?',
                        antwort: null,
                        moeglichkeiten: [
                            {
                                text: 'Ja',
                                value: true,
                            },
                            {
                                text: 'Nein',
                                value: false
                            }]
                    }
                },
                {
                    text: 'Nein',
                    value: false
                }]
        },
        {
            id: '7456e209-82fa-4073-b755-0cdf04a5e8d8',
            type: 'bool',
            fragenText: 'Wurden bereits bei anderen Versicherungsunternehmen Anträge mit Gesundheitsfragen zurückgestellt oder abgelehnt?',
            antwort: null,
            moeglichkeiten: [
                {
                    text: 'Ja',
                    value: true,
                    unterfrage: {
                        id: '95395b66-879e-425a-aa80-68534080f837',
                        type: 'text',
                        fragenText: 'Bitte machen Sie nähere Angaben',
                        antwort: null,
                        moeglichkeiten: []
                    }
                },
                {
                    text: 'Nein',
                    value: false
                }]
        },
        {
            id: '1fe0b341-9e6a-4075-9778-2b018031a1d9',
            type: 'bool',
            fragenText: 'Sind Sie berufstätig?',
            antwort: null,
            moeglichkeiten: [
                {
                    text: 'Ja',
                    value: true,
                },
                {
                    text: 'Nein',
                    value: false,
                    unterfrage: {
                        id: '22d1653f-7f58-4519-a18f-eb5535f0621f',
                        type: 'select',
                        fragenText: 'Sind Sie Hausfrau/Hausmann, im Erziehungsurlaub, Rentner, Schüler, Student, arbeitslos oder Sonstiges?',
                        antwort: null,
                        moeglichkeiten: [
                            {
                                text: 'Hausmann/Hausfrau',
                                value: '07c0509c-068b-4eea-8159-b6261862ec88',
                            },
                            {
                                text: 'Im Erziehungsurlaub',
                                value: '1ada2494-4b50-455d-af93-b1193d036118'
                            },
                            {
                                text: 'Rentner',
                                value: '493226cb-a2c6-4205-83ed-da51be504b9d',
                            }]
                    }
                }
            ]
        },
        {
            id: 'b6866542-be3d-46a5-8fd3-78fe0df83ed4',
            type: 'bool',
            fragenText: "Sind Sie in einem gefährlichen Beruf tätig?",
            antwort: null,
            moeglichkeiten: [
                {
                    text: 'Ja',
                    value: true,
                    unterfrage: {
                        id: '17fe44e2-eb7e-4318-b754-e0fb84ea31fc',
                        type: 'select',
                        fragenText: "In welchem?",
                        antwort: null,
                        moeglichkeiten: [
                            {
                                text: 'Soldat',
                                value: 'a386c211-48a4-4ef6-b613-ea63a06b9183',
                                unterfrage: {
                                    id: '17ac2b53-9a17-4ed3-9d43-c3d87477c88b',
                                    type: 'select',
                                    fragenText: 'Sind Sie Wehrpflichtiger, verlängerter Wehrpflichtiger, Zeitsoldat oder Berufssoldat?',
                                    antwort: null,
                                    moeglichkeiten: [
                                        {
                                            text: 'Wehrpflichtiger',
                                            value: '892e2d07-26fc-4957-97f2-98c188ba4494',
                                            unterfrage: {
                                                id: '61805a43-6ab4-46ab-bc94-d423d12f6ba2',
                                                type: 'bool',
                                                fragenText: "Haben Sie sich für einen Auslandseinsatz gemeldet oder haben Sie das vor?",
                                                antwort: null,
                                                moeglichkeiten: [
                                                    {
                                                        text: 'Ja',
                                                        value: true,
                                                    },
                                                    {
                                                        text: 'Nein',
                                                        value: false
                                                    }]
                                            }
                                        },
                                        {
                                            text: 'Zeitsoldat',
                                            value: 'e4b8dad4-5402-4ffd-a3e9-9e2e5b6a80a6',
                                        },
                                        {
                                            text: 'Berufssoldat',
                                            value: 'ffd519dd-5e2a-4485-b6bb-499228aa4d09',
                                        }
                                    ]
                                }
                            },
                            {
                                text: 'Polizist',
                                value: '0344320b-90ed-41f6-ac64-d51392486081'
                            }]

                    }
                },
                {
                    text: 'Nein',
                    value: false,
                }
            ],
        }
    ],
    setAntwort: function (id, antwort) {

        setAntwortInTeilbaum(this.baum);

        // todo remove answers in lower levels that are not valid anymore.

        function setAntwortInTeilbaum(teilBaum) {
            for (let i = 0; i < teilBaum.length; i++) {
                const frage = teilBaum[i];
                if (frage.id === id) {
                    frage.antwort = antwort;
                } else {
                    for (let j = 0; j < frage.moeglichkeiten.length; j++) {
                        const unterfrage = frage.moeglichkeiten[j].unterfrage;
                        if (unterfrage) {
                            setAntwortInTeilbaum([unterfrage]);
                        }
                    }
                }
            }
        }
    }
}