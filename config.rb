# Require any additional compass plugins here.
require 'breakpoint'

http_path = "/"
css_dir = "/css"
sass_dir = "/patterns"
images_dir = "images"
javascripts_dir = "scripts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
Sass::Script::Number.precision = 15


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass assets/scss scss && rm -rf sass && mv scss sass