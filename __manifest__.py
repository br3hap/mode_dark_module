# -*- coding: utf-8 -*-
{
    'name': 'Modo Oscuro',
    'version': '1.0',
    'summary': """ Módulo que permite controlar el modo oscuro - odoo 18""",
    'author': 'Breithner Aquituari',
    'website': '',
    'category': '',
    'depends': ['base', ],
    'data': [
        
    ],

    'assets': {
        'web.assets_backend': [
            'mode_dark_module/static/**/*',
        ],
    },
    
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
