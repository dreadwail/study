module Algos
  module Bits

    ALPHA_ONLY_PIXEL_MASK = 0b11111111000000000000000000000000
    WITHOUT_ALPHA_PIXEL_MASK = 0b00000000111111111111111111111111
    MAX_PIXEL = 0b11111111111111111111111111111111

    # change just the left 8 bits based on multiplier
    def self.alter_pixel_transparency(pixel, alpha_multiplier)

      raise "Invalid pixel" if pixel < 0 || pixel > MAX_PIXEL

      alpha = pixel & ALPHA_ONLY_PIXEL_MASK

      new_alpha = (alpha * alpha_multiplier).floor
      new_alpha &= ALPHA_ONLY_PIXEL_MASK

      pixel &= WITHOUT_ALPHA_PIXEL_MASK
      pixel |= new_alpha

      pixel

    end

  end
end
