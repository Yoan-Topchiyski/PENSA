﻿using System;
using System.Collections.Generic;

namespace Mapping_BackEnd.Data;

public partial class Place
{
    public int Id { get; set; }

    public string? Caption { get; set; }

    public double? Lat { get; set; }

    public double? Long { get; set; }

    public double? Radius { get; set; }
}
