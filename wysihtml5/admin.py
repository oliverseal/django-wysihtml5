#-*- coding: utf-8 -*-

from wysihtml5.fields import Wysihtml5TextField
from wysihtml5.widgets import Wysihtml5AdminTextareaWidget

from django.contrib import admin

class AdminWysihtml5ModelAdminMixin(object):

	def get_form(self, request, obj=None, **kwargs):
		form = admin.ModelAdmin.get_form(self, request, obj=obj, **kwargs)
		return form

	"""Mixin for ModelAdmin subclasses to provide custom widget for ``Wysihtml5TextField`` fields."""
	def formfield_for_dbfield(self, db_field, **kwargs):
		if isinstance(db_field, Wysihtml5TextField):
			return db_field.formfield(widget=Wysihtml5AdminTextareaWidget)
		return super(admin.ModelAdmin, self).formfield_for_dbfield(db_field, **kwargs)

