# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "recetas-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Jose"]
  spec.email         = ["josecaramor1@hotmail.com"]

  spec.summary       = %q{A short description of my theme}
  spec.homepage      = "http://website.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
